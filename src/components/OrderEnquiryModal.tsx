import React, { useEffect, useState } from 'react';
import {
  X,
  Plus,
  Minus,
  Trash2,
  MessageCircle,
  Truck,
  Store,
  Info,
} from 'lucide-react';
import { DeliveryMode, Language, OrderCartItem } from '../types';
import {
  DELIVERY_CONFIG,
  DEMO_PRICING_META,
  FARM_CONTACT,
  PRODUCTS,
} from '../data/farmCatalog';
import { Translations } from '../data/translations';

interface OrderEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  t: Translations;
  initialProductId?: string;
  initialPackSizeId?: string;
}

export const OrderEnquiryModal: React.FC<OrderEnquiryModalProps> = ({
  isOpen,
  onClose,
  language,
  t,
  initialProductId,
  initialPackSizeId,
}) => {
  const [items, setItems] = useState<OrderCartItem[]>([]);
  const [deliveryMode, setDeliveryMode] = useState<DeliveryMode>('home-delivery');
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Reset / seed item when modal opens with a specific product
  useEffect(() => {
    if (!isOpen) return;
    const defaultProd =
      PRODUCTS.find((p) => p.id === initialProductId) || PRODUCTS[0];
    const defaultPack =
      defaultProd.packSizes.find((pk) => pk.id === initialPackSizeId) ||
      defaultProd.packSizes[0];

    setItems([
      {
        productId: defaultProd.id,
        packSizeId: defaultPack.id,
        quantity: 1,
      },
    ]);
    setErrorMsg('');
  }, [isOpen, initialProductId, initialPackSizeId]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleProductChange = (index: number, newProductId: string) => {
    const prod = PRODUCTS.find((p) => p.id === newProductId) || PRODUCTS[0];
    setItems((prev) =>
      prev.map((item, i) =>
        i === index
          ? { ...item, productId: prod.id, packSizeId: prod.packSizes[0].id }
          : item
      )
    );
  };

  const handlePackChange = (index: number, newPackId: string) => {
    setItems((prev) =>
      prev.map((item, i) => (i === index ? { ...item, packSizeId: newPackId } : item))
    );
  };

  const handleQtyChange = (index: number, delta: number) => {
    setItems((prev) =>
      prev.map((item, i) =>
        i === index
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleAddItem = () => {
    const firstAvailable = PRODUCTS[0];
    setItems((prev) => [
      ...prev,
      {
        productId: firstAvailable.id,
        packSizeId: firstAvailable.packSizes[0].id,
        quantity: 1,
      },
    ]);
  };

  const handleRemoveItem = (index: number) => {
    if (items.length <= 1) return;
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  // Compute demo pricing summary
  const enrichedItems = items.map((item) => {
    const product = PRODUCTS.find((p) => p.id === item.productId) || PRODUCTS[0];
    const pack =
      product.packSizes.find((pk) => pk.id === item.packSizeId) ||
      product.packSizes[0];
    const lineTotal = pack.demoPriceInr * item.quantity;
    return { ...item, product, pack, lineTotal };
  });

  const subtotal = enrichedItems.reduce((sum, item) => sum + item.lineTotal, 0);
  const qualifiesFreeDelivery =
    subtotal >= DELIVERY_CONFIG.freeDeliveryThresholdInr;
  const estimatedDeliveryFee =
    deliveryMode === 'farm-pickup'
      ? 0
      : qualifiesFreeDelivery
        ? 0
        : DELIVERY_CONFIG.deliveryChargeInr;
  const estimatedTotal = subtotal + estimatedDeliveryFee;

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = customerName.trim();
    const trimmedPhone = phone.trim();
    const trimmedAddress = address.trim();

    if (
      !trimmedName ||
      !trimmedPhone ||
      (deliveryMode === 'home-delivery' && !trimmedAddress)
    ) {
      setErrorMsg(t.orderModal.validationMissing);
      return;
    }

    setErrorMsg('');

    const itemLines = enrichedItems
      .map(
        (item, idx) =>
          `${idx + 1}. ${item.product.name[language]} (${item.pack.label[language]}) x ${item.quantity} = ₹${item.lineTotal} [Demo]`
      )
      .join('\n');

    const deliveryLabel =
      deliveryMode === 'home-delivery'
        ? t.orderModal.homeDeliveryLabel
        : t.orderModal.farmPickupLabel;

    const messageLines = [
      `Hello ${FARM_CONTACT.brandName} – ${FARM_CONTACT.brandSubtitle[language]},`,
      `I would like to send an Order Enquiry (Demo Pricing):`,
      '',
      itemLines,
      '',
      `Subtotal (Demo): ₹${subtotal}`,
      `Delivery Option: ${deliveryLabel}`,
      deliveryMode === 'home-delivery'
        ? `Estimated Delivery (Demo): ₹${estimatedDeliveryFee}`
        : `Pickup Fee: ₹0`,
      `Estimated Total (Demo): ₹${estimatedTotal}`,
      '',
      `Customer Name: ${trimmedName}`,
      `Phone: ${trimmedPhone}`,
      deliveryMode === 'home-delivery'
        ? `Delivery Address: ${trimmedAddress}`
        : `Collection: Direct Farm Pickup`,
      notes.trim() ? `Note: ${notes.trim()}` : '',
      '',
      `(Sent via website enquiry form — please confirm availability and final prices.)`,
    ].filter(Boolean);

    const whatsappUrl = `https://wa.me/${FARM_CONTACT.whatsappNumber}?text=${encodeURIComponent(
      messageLines.join('\n')
    )}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#112B1E]/75 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-enquiry-title"
    >
      <div className="relative w-full max-w-3xl bg-[#F7F1E3] text-[#26332B] border border-[#C49A52]/60 rounded-sm shadow-2xl my-auto max-h-[92vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="sticky top-0 z-10 bg-[#183D2B] text-[#F7F1E3] px-5 sm:px-7 py-5 flex items-center justify-between border-b border-[#C49A52]/40">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#C49A52] font-semibold block">
              {t.orderModal.subtitle}
            </span>
            <h2
              id="order-enquiry-title"
              className="font-serif-editorial text-2xl sm:text-3xl font-semibold"
            >
              {t.orderModal.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.orderModal.closeLabel}
            className="p-2 rounded-sm text-[#F7F1E3]/80 hover:text-[#F7F1E3] hover:bg-[#112B1E] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmitWhatsApp} className="p-5 sm:p-7 space-y-6">
          {/* Demo Enquiry Disclaimer */}
          <div className="flex items-start gap-3 p-4 bg-[#DCE6D6]/65 border border-[#183D2B]/20 rounded-sm">
            <Info className="w-4 h-4 text-[#183D2B] shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-[#183D2B] leading-relaxed font-medium">
              {t.orderModal.demoNotice}
            </p>
          </div>

          {/* Product Rows */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#183D2B]">
                {t.orderModal.itemsInEnquiryLabel}
              </span>
              <span className="px-2 py-0.5 bg-[#C49A52]/25 text-[#183D2B] text-[10px] font-bold uppercase tracking-wider rounded-xs">
                {DEMO_PRICING_META.badgeLabel[language]}
              </span>
            </div>

            {enrichedItems.map((item, idx) => (
              <div
                key={`${item.productId}-${idx}`}
                className="bg-[#FBF8F0] border border-[#183D2B]/15 rounded-sm p-4 space-y-3"
              >
                <div className="grid sm:grid-cols-12 gap-3 items-end">
                  {/* Product Select */}
                  <div className="sm:col-span-5">
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#4E5C53] mb-1">
                      {t.orderModal.selectProductLabel}
                    </label>
                    <select
                      value={item.productId}
                      onChange={(e) => handleProductChange(idx, e.target.value)}
                      className="w-full px-3 py-2 bg-[#F7F1E3] border border-[#183D2B]/25 rounded-sm text-sm font-medium text-[#183D2B] focus:outline-none focus:border-[#C49A52]"
                    >
                      {PRODUCTS.map((prod) => (
                        <option key={prod.id} value={prod.id}>
                          {prod.name[language]}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Pack Size Select */}
                  <div className="sm:col-span-4">
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#4E5C53] mb-1">
                      {t.orderModal.packSizeLabel}
                    </label>
                    <select
                      value={item.packSizeId}
                      onChange={(e) => handlePackChange(idx, e.target.value)}
                      className="w-full px-3 py-2 bg-[#F7F1E3] border border-[#183D2B]/25 rounded-sm text-sm font-medium text-[#183D2B] focus:outline-none focus:border-[#C49A52]"
                    >
                      {item.product.packSizes.map((pk) => (
                        <option key={pk.id} value={pk.id}>
                          {pk.label[language]} — ₹{pk.demoPriceInr}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Quantity Stepper */}
                  <div className="sm:col-span-3">
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#4E5C53] mb-1">
                      {t.orderModal.quantityLabel}
                    </label>
                    <div className="flex items-center justify-between border border-[#183D2B]/25 bg-[#F7F1E3] rounded-sm">
                      <button
                        type="button"
                        onClick={() => handleQtyChange(idx, -1)}
                        aria-label="Decrease quantity"
                        className="p-2 text-[#183D2B] hover:bg-[#DCE6D6]/60 cursor-pointer"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-sm font-bold text-[#183D2B] px-2">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleQtyChange(idx, 1)}
                        aria-label="Increase quantity"
                        className="p-2 text-[#183D2B] hover:bg-[#DCE6D6]/60 cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-[#183D2B]/10 text-xs">
                  <span className="text-[#4E5C53]">
                    ₹{item.pack.demoPriceInr} × {item.quantity} ={' '}
                    <strong className="text-[#183D2B]">
                      ₹{item.lineTotal} ({t.orderModal.demoPriceSuffix})
                    </strong>
                  </span>

                  {items.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveItem(idx)}
                      className="inline-flex items-center gap-1 text-red-700 hover:text-red-900 font-medium cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>{t.orderModal.removeLabel}</span>
                    </button>
                  )}
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={handleAddItem}
              className="text-xs font-semibold text-[#183D2B] hover:text-[#A67E38] underline decoration-[#C49A52] cursor-pointer"
            >
              {t.orderModal.addAnotherLabel}
            </button>
          </div>

          {/* Delivery Mode Toggle */}
          <div>
            <span className="block text-xs font-bold uppercase tracking-[0.16em] text-[#183D2B] mb-2.5">
              {t.orderModal.deliveryMethodLabel}
            </span>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setDeliveryMode('home-delivery')}
                className={`flex items-center justify-center gap-2 py-3 px-4 rounded-sm border text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                  deliveryMode === 'home-delivery'
                    ? 'bg-[#183D2B] text-[#F7F1E3] border-[#183D2B]'
                    : 'bg-[#FBF8F0] text-[#26332B] border-[#183D2B]/20 hover:border-[#C49A52]'
                }`}
              >
                <Truck className="w-4 h-4 text-[#C49A52]" />
                <span>{t.orderModal.homeDeliveryLabel}</span>
              </button>

              <button
                type="button"
                onClick={() => setDeliveryMode('farm-pickup')}
                className={`flex items-center justify-center gap-2 py-3 px-4 rounded-sm border text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                  deliveryMode === 'farm-pickup'
                    ? 'bg-[#183D2B] text-[#F7F1E3] border-[#183D2B]'
                    : 'bg-[#FBF8F0] text-[#26332B] border-[#183D2B]/20 hover:border-[#C49A52]'
                }`}
              >
                <Store className="w-4 h-4 text-[#C49A52]" />
                <span>{t.orderModal.farmPickupLabel}</span>
              </button>
            </div>
          </div>

          {/* Customer Details */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="enquiry-name"
                className="block text-xs font-semibold uppercase tracking-wider text-[#4E5C53] mb-1.5"
              >
                {t.orderModal.customerNameLabel} *
              </label>
              <input
                id="enquiry-name"
                type="text"
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder={t.orderModal.customerNamePlaceholder}
                className="w-full px-3.5 py-2.5 bg-[#FBF8F0] border border-[#183D2B]/25 rounded-sm text-sm text-[#183D2B] focus:outline-none focus:border-[#C49A52]"
              />
            </div>

            <div>
              <label
                htmlFor="enquiry-phone"
                className="block text-xs font-semibold uppercase tracking-wider text-[#4E5C53] mb-1.5"
              >
                {t.orderModal.phoneLabel} *
              </label>
              <input
                id="enquiry-phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t.orderModal.phonePlaceholder}
                className="w-full px-3.5 py-2.5 bg-[#FBF8F0] border border-[#183D2B]/25 rounded-sm text-sm text-[#183D2B] focus:outline-none focus:border-[#C49A52]"
              />
            </div>
          </div>

          {deliveryMode === 'home-delivery' ? (
            <div>
              <label
                htmlFor="enquiry-address"
                className="block text-xs font-semibold uppercase tracking-wider text-[#4E5C53] mb-1.5"
              >
                {t.orderModal.addressLabel} *
              </label>
              <textarea
                id="enquiry-address"
                rows={2}
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder={t.orderModal.addressPlaceholder}
                className="w-full px-3.5 py-2.5 bg-[#FBF8F0] border border-[#183D2B]/25 rounded-sm text-sm text-[#183D2B] focus:outline-none focus:border-[#C49A52]"
              />
            </div>
          ) : (
            <div className="p-3.5 bg-[#DCE6D6]/50 border border-[#183D2B]/15 rounded-sm text-xs sm:text-sm text-[#183D2B]">
              {t.orderModal.pickupNote}
            </div>
          )}

          <div>
            <label
              htmlFor="enquiry-notes"
              className="block text-xs font-semibold uppercase tracking-wider text-[#4E5C53] mb-1.5"
            >
              {t.orderModal.notesLabel}
            </label>
            <input
              id="enquiry-notes"
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={t.orderModal.notesPlaceholder}
              className="w-full px-3.5 py-2.5 bg-[#FBF8F0] border border-[#183D2B]/25 rounded-sm text-sm text-[#183D2B] focus:outline-none focus:border-[#C49A52]"
            />
          </div>

          {/* Order Summary Box */}
          <div className="bg-[#FBF8F0] border border-[#183D2B]/20 rounded-sm p-5 space-y-2.5">
            <h3 className="font-serif-editorial text-xl font-semibold text-[#183D2B] pb-2 border-b border-[#183D2B]/12">
              {t.orderModal.summaryTitle}
            </h3>

            <div className="space-y-1.5 text-xs sm:text-sm text-[#4E5C53]">
              {enrichedItems.map((item, idx) => (
                <div key={idx} className="flex justify-between gap-2">
                  <span>
                    {item.product.name[language]} ({item.pack.label[language]}) ×{' '}
                    {item.quantity}
                  </span>
                  <span className="font-semibold text-[#183D2B]">
                    ₹{item.lineTotal}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-[#183D2B]/12 space-y-1.5 text-sm">
              <div className="flex justify-between">
                <span className="text-[#4E5C53]">{t.orderModal.itemsSubtotalLabel}</span>
                <span className="font-semibold text-[#183D2B]">₹{subtotal}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#4E5C53]">
                  {t.orderModal.estimatedDeliveryLabel}
                </span>
                <span className="font-semibold text-[#183D2B]">
                  {deliveryMode === 'farm-pickup'
                    ? t.orderModal.pickupFreeLabel
                    : qualifiesFreeDelivery
                      ? `₹0 (${t.orderModal.freeDeliveryUnlocked})`
                      : `₹${estimatedDeliveryFee}`}
                </span>
              </div>

              {deliveryMode === 'home-delivery' &&
                subtotal < DELIVERY_CONFIG.minimumOrderAmountInr && (
                  <p className="text-xs text-[#A67E38] font-medium">
                    {t.orderModal.minOrderHint} ₹{DELIVERY_CONFIG.minimumOrderAmountInr}
                  </p>
                )}

              <div className="flex justify-between items-baseline pt-2 border-t border-[#183D2B]/15">
                <span className="font-bold text-[#183D2B]">
                  {t.orderModal.estimatedTotalLabel}
                </span>
                <span className="font-serif-editorial text-2xl font-bold text-[#183D2B]">
                  ₹{estimatedTotal}{' '}
                  <span className="text-xs font-sans font-semibold text-[#A67E38]">
                    ({t.orderModal.demoPriceSuffix})
                  </span>
                </span>
              </div>
            </div>
          </div>

          {errorMsg && (
            <p className="text-xs sm:text-sm font-medium text-red-700 bg-red-50 border border-red-200 px-3.5 py-2.5 rounded-sm">
              {errorMsg}
            </p>
          )}

          <div className="space-y-2.5">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-[#183D2B] hover:bg-[#112B1E] text-[#F7F1E3] text-sm font-bold uppercase tracking-wider rounded-sm border border-[#C49A52]/50 transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#C49A52]" />
              <span>{t.orderModal.submitWhatsappCta}</span>
            </button>

            <p className="text-[11px] text-center text-[#4E5C53] leading-relaxed">
              {t.orderModal.disclaimerFooter}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
