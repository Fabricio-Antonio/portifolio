/** Número com DDI, sem + (Brasil: 55 + DDD + número) */
export const WHATSAPP_PHONE_E164 = "5581983587510";

export function getWhatsAppChatUrl(prefilledMessage: string): string {
  const params = new URLSearchParams({ text: prefilledMessage });
  return `https://wa.me/${WHATSAPP_PHONE_E164}?${params.toString()}`;
}
