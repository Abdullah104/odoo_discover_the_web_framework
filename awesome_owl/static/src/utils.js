import { onMounted, useRef } from "@odoo/owl";

export const useAutoFocus = (ref) => onMounted(() => ref.el.focus());
