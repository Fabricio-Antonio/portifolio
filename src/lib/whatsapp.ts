/** Número com DDI, sem + (Brasil: 55 + DDD + número) */
export const WHATSAPP_PHONE_E164 = "558198358710";

export function getWhatsAppChatUrl(prefilledMessage: string): string {
  const params = new URLSearchParams({ text: prefilledMessage });
  return `https://wa.me/${WHATSAPP_PHONE_E164}?${params.toString()}`;
}
