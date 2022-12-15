import { createVNode, render, h, nextTick } from "vue";
import type { VNode, RendererElement, RendererNode } from "vue";

import AlertToast from "@/components/AlertToast.vue";

type MayBeVnode =
  | undefined
  | VNode<
      RendererNode,
      RendererElement,
      {
        [key: string]: unknown;
      }
    >;

type ActionMessageOptions = {
  duration: number;
  message: string;
  class?: string;
};

export function useAlertToast() {
  function toastRef(attrs: Omit<ActionMessageOptions, "duration">) {
    const container = document.getElementById("toast-container")!;
    let nodeRef: MayBeVnode = h(
      createVNode(AlertToast, {
        msg: attrs.message,
        class: attrs.class ?? "",
      })
    );
    render(nodeRef, container);
    return () => {
      render(null, container);
      nodeRef = undefined;
    };
  }

  async function showToast({ duration, ...attrs }: ActionMessageOptions) {
    await nextTick();
    const close = toastRef(attrs);

    setTimeout(() => {
      close();
    }, duration);
  }

  return { showToast };
}
