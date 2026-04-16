import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, Phone, MoreVertical, CheckCheck, Smile, Mic } from "lucide-react";
import waChatBg from "@/assets/wa-chat-bg.png";
import waChatBgLight from "@/assets/wa-chat-bg-light.png";
import brevyaAvatar from "@/assets/brevya-avatar.png";

type FlowScreen = "chat" | "categories" | "product" | "cart" | "address" | "payment" | "done";

const FlowCommerceDemo = () => {
  const [screen, setScreen] = useState<FlowScreen>("chat");
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains("dark"));

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const goTo = (s: FlowScreen) => setScreen(s);

  // Flow header reusable
  const FlowHeader = ({ title, onBack }: { title: string; onBack: () => void }) => (
    <div className="bg-[#008069] dark:bg-[#1f2c34] px-4 py-3 flex items-center border-b border-white/10 dark:border-[#2a3942]/60">
      <button onClick={onBack} className="text-white dark:text-[#e9edef] w-8">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      <p className="flex-1 text-white dark:text-[#e9edef] text-[15px] font-semibold text-center">{title}</p>
      <div className="w-8 flex justify-end">
        <MoreVertical size={18} className="text-white dark:text-[#e9edef]" />
      </div>
    </div>
  );

  // Flow footer reusable
  const FlowFooter = ({ label, onClick }: { label: string; onClick: () => void }) => (
    <div className="bg-white dark:bg-[#111b21] px-5 pb-4 pt-2 border-t border-[#e9edef] dark:border-[#2a3942]/40">
      <button
        onClick={onClick}
        className="w-full py-[14px] rounded-full bg-[#00a884] text-white dark:text-[#111b21] font-bold text-[15px] hover:bg-[#06cf9c] transition-all duration-200 active:scale-[0.98]"
      >
        {label}
      </button>
      <p className="text-center text-[11px] text-[#667781] dark:text-[#8696a0] mt-2.5">
        Gerenciada pela empresa. <span className="text-[#00a884] dark:text-[#53bdeb]">Saiba mais</span>
      </p>
    </div>
  );

  // Categories screen
  const CategoriesScreen = () => (
    <>
      <FlowHeader title="Flow Commerce" onBack={() => goTo("chat")} />
      <div className="bg-white dark:bg-[#111b21] px-5 py-5 flex-1 flex flex-col overflow-y-auto">
        <h3 className="text-[#111b21] dark:text-[#e9edef] text-[20px] font-bold leading-tight">Categorias</h3>
        <p className="text-[#667781] dark:text-[#8696a0] text-[14px] mt-2 leading-relaxed">
          Escolha uma categoria para explorar nossos produtos.
        </p>
        <div className="flex items-center gap-1.5 mt-3 mb-5">
          <span className="text-[13px]">🛍️</span>
          <span className="text-[#667781] dark:text-[#8696a0] text-[13px]">Compra 100% pelo WhatsApp</span>
        </div>
        <div className="space-y-2.5">
          {["👟 Calçados", "👕 Camisetas", "👖 Jeans", "🧢 Acessórios"].map((cat) => (
            <button
              key={cat}
              onClick={() => goTo("product")}
              className="w-full text-left rounded-lg border border-[#d1d7db] dark:border-[#3b4a54] px-4 py-3.5 text-[15px] text-[#111b21] dark:text-[#e9edef] hover:bg-[#f0f2f5] dark:hover:bg-[#202c33] transition-colors flex items-center justify-between"
            >
              <span>{cat}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#667781] dark:text-[#8696a0]">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          ))}
        </div>
      </div>
      <FlowFooter label="Ver destaques" onClick={() => goTo("product")} />
    </>
  );

  // Product screen
  const ProductScreen = () => (
    <>
      <FlowHeader title="Produto" onBack={() => goTo("categories")} />
      <div className="bg-white dark:bg-[#111b21] px-5 py-5 flex-1 flex flex-col overflow-y-auto">
        {/* Product image placeholder */}
        <div className="w-full aspect-square rounded-xl bg-[#f0f2f5] dark:bg-[#202c33] flex items-center justify-center mb-4 overflow-hidden">
          <div className="text-center">
            <span className="text-5xl">👟</span>
            <p className="text-[12px] text-[#667781] dark:text-[#8696a0] mt-2">Flow Sneaker X1</p>
          </div>
        </div>
        <h3 className="text-[#111b21] dark:text-[#e9edef] text-[18px] font-bold">Flow Sneaker X1</h3>
        <p className="text-[#00a884] dark:text-[#53bdeb] text-[20px] font-bold mt-1">R$ 349,90</p>
        <p className="text-[#667781] dark:text-[#8696a0] text-[13px] line-through">R$ 499,90</p>
        <p className="text-[#667781] dark:text-[#8696a0] text-[14px] mt-3 leading-relaxed">
          Tênis premium com design exclusivo. Conforto e estilo para o seu dia a dia.
        </p>

        {/* Size selector */}
        <p className="text-[#111b21] dark:text-[#e9edef] text-[14px] font-semibold mt-4 mb-2">Tamanho</p>
        <div className="flex gap-2">
          {["38", "39", "40", "41", "42"].map((size, i) => (
            <button
              key={size}
              className={`w-10 h-10 rounded-lg border text-[14px] font-medium transition-colors ${
                i === 2
                  ? "border-[#00a884] bg-[#00a884]/10 text-[#00a884] dark:border-[#53bdeb] dark:bg-[#53bdeb]/10 dark:text-[#53bdeb]"
                  : "border-[#d1d7db] dark:border-[#3b4a54] text-[#111b21] dark:text-[#e9edef] hover:border-[#00a884] dark:hover:border-[#53bdeb]"
              }`}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Quantity */}
        <p className="text-[#111b21] dark:text-[#e9edef] text-[14px] font-semibold mt-4 mb-2">Quantidade</p>
        <div className="flex items-center gap-3">
          <button className="w-9 h-9 rounded-lg border border-[#d1d7db] dark:border-[#3b4a54] text-[#111b21] dark:text-[#e9edef] flex items-center justify-center text-lg">−</button>
          <span className="text-[#111b21] dark:text-[#e9edef] text-[16px] font-semibold w-8 text-center">1</span>
          <button className="w-9 h-9 rounded-lg border border-[#d1d7db] dark:border-[#3b4a54] text-[#111b21] dark:text-[#e9edef] flex items-center justify-center text-lg">+</button>
        </div>
      </div>
      <FlowFooter label="Adicionar ao carrinho" onClick={() => goTo("cart")} />
    </>
  );

  // Cart screen
  const CartScreen = () => (
    <>
      <FlowHeader title="Carrinho" onBack={() => goTo("product")} />
      <div className="bg-white dark:bg-[#111b21] px-5 py-5 flex-1 flex flex-col overflow-y-auto">
        <h3 className="text-[#111b21] dark:text-[#e9edef] text-[20px] font-bold leading-tight">Seu carrinho</h3>
        <p className="text-[#667781] dark:text-[#8696a0] text-[14px] mt-1 mb-5">1 item adicionado</p>

        {/* Cart item */}
        <div className="rounded-xl border border-[#d1d7db] dark:border-[#3b4a54] p-3 flex gap-3">
          <div className="w-16 h-16 rounded-lg bg-[#f0f2f5] dark:bg-[#202c33] flex items-center justify-center shrink-0">
            <span className="text-2xl">👟</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[#111b21] dark:text-[#e9edef] text-[14px] font-semibold truncate">Flow Sneaker X1</p>
            <p className="text-[#667781] dark:text-[#8696a0] text-[13px]">Tam. 40 • Qtd: 1</p>
            <p className="text-[#00a884] dark:text-[#53bdeb] text-[15px] font-bold mt-1">R$ 349,90</p>
          </div>
        </div>

        {/* Coupon */}
        <div className="mt-4 rounded-lg border border-[#d1d7db] dark:border-[#3b4a54] px-3 pt-3 pb-2 relative">
          <label className="absolute -top-2.5 left-2.5 bg-white dark:bg-[#111b21] px-1 text-[12px] text-[#667781] dark:text-[#8696a0]">
            Cupom de desconto
          </label>
          <input
            type="text"
            placeholder="FLOW10"
            className="w-full bg-transparent text-[#111b21] dark:text-[#e9edef] text-[15px] focus:outline-none placeholder:text-[#667781]/40 dark:placeholder:text-[#3b4a54]"
            readOnly
          />
        </div>

        {/* Summary */}
        <div className="mt-5 pt-4 border-t border-[#e9edef] dark:border-[#2a3942]/40 space-y-2">
          <div className="flex justify-between text-[14px]">
            <span className="text-[#667781] dark:text-[#8696a0]">Subtotal</span>
            <span className="text-[#111b21] dark:text-[#e9edef]">R$ 349,90</span>
          </div>
          <div className="flex justify-between text-[14px]">
            <span className="text-[#667781] dark:text-[#8696a0]">Frete</span>
            <span className="text-[#00a884] dark:text-[#53bdeb] font-medium">Grátis</span>
          </div>
          <div className="flex justify-between text-[16px] font-bold pt-2 border-t border-[#e9edef] dark:border-[#2a3942]/40">
            <span className="text-[#111b21] dark:text-[#e9edef]">Total</span>
            <span className="text-[#111b21] dark:text-[#e9edef]">R$ 349,90</span>
          </div>
        </div>
      </div>
      <FlowFooter label="Continuar" onClick={() => goTo("address")} />
    </>
  );

  // Address screen
  const AddressScreen = () => (
    <>
      <FlowHeader title="Endereço" onBack={() => goTo("cart")} />
      <div className="bg-white dark:bg-[#111b21] px-5 py-5 flex-1 flex flex-col overflow-y-auto">
        <h3 className="text-[#111b21] dark:text-[#e9edef] text-[20px] font-bold leading-tight">Endereço de entrega</h3>
        <p className="text-[#667781] dark:text-[#8696a0] text-[14px] mt-2 mb-5">Informe o endereço para receber seu pedido.</p>

        <div className="space-y-4">
          {[
            { label: "CEP", placeholder: "01310-100", value: "01310-100" },
            { label: "Rua", placeholder: "Av. Paulista", value: "Av. Paulista" },
            { label: "Número", placeholder: "1000", value: "1000" },
            { label: "Complemento", placeholder: "Apto 42", value: "" },
            { label: "Bairro", placeholder: "Bela Vista", value: "Bela Vista" },
            { label: "Cidade", placeholder: "São Paulo", value: "São Paulo" },
          ].map((field) => (
            <div key={field.label} className="relative">
              <div className="rounded-lg border border-[#d1d7db] dark:border-[#3b4a54] px-3 pt-3 pb-2 transition-colors focus-within:border-[#00a884]">
                <label className="absolute -top-2.5 left-2.5 bg-white dark:bg-[#111b21] px-1 text-[12px] text-[#667781] dark:text-[#8696a0]">
                  {field.label}
                </label>
                <input
                  type="text"
                  defaultValue={field.value}
                  placeholder={field.placeholder}
                  className="w-full bg-transparent text-[#111b21] dark:text-[#e9edef] text-[15px] focus:outline-none placeholder:text-[#667781]/40 dark:placeholder:text-[#3b4a54]"
                  readOnly
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <FlowFooter label="Ir para pagamento" onClick={() => goTo("payment")} />
    </>
  );

  // Payment screen
  const PaymentScreen = () => (
    <>
      <FlowHeader title="Pagamento" onBack={() => goTo("address")} />
      <div className="bg-white dark:bg-[#111b21] px-5 py-5 flex-1 flex flex-col overflow-y-auto">
        <h3 className="text-[#111b21] dark:text-[#e9edef] text-[20px] font-bold leading-tight">Forma de pagamento</h3>
        <p className="text-[#667781] dark:text-[#8696a0] text-[14px] mt-2 mb-5">Escolha como deseja pagar.</p>

        <div className="space-y-2.5">
          {[
            { icon: "💳", label: "Cartão de crédito", desc: "Até 12x sem juros", selected: false },
            { icon: "📱", label: "Pix", desc: "Aprovação instantânea", selected: true },
            { icon: "🏦", label: "Boleto bancário", desc: "Vencimento em 3 dias", selected: false },
          ].map((method) => (
            <div
              key={method.label}
              className={`rounded-xl border px-4 py-3.5 flex items-center gap-3 transition-colors cursor-pointer ${
                method.selected
                  ? "border-[#00a884] bg-[#00a884]/5 dark:border-[#53bdeb] dark:bg-[#53bdeb]/5"
                  : "border-[#d1d7db] dark:border-[#3b4a54] hover:border-[#00a884]/50 dark:hover:border-[#53bdeb]/50"
              }`}
            >
              <span className="text-xl">{method.icon}</span>
              <div className="flex-1">
                <p className={`text-[15px] font-medium ${method.selected ? "text-[#00a884] dark:text-[#53bdeb]" : "text-[#111b21] dark:text-[#e9edef]"}`}>
                  {method.label}
                </p>
                <p className="text-[13px] text-[#667781] dark:text-[#8696a0]">{method.desc}</p>
              </div>
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                method.selected ? "border-[#00a884] dark:border-[#53bdeb]" : "border-[#d1d7db] dark:border-[#3b4a54]"
              }`}>
                {method.selected && <div className="w-2.5 h-2.5 rounded-full bg-[#00a884] dark:bg-[#53bdeb]" />}
              </div>
            </div>
          ))}
        </div>

        {/* Order summary */}
        <div className="mt-6 pt-4 border-t border-[#e9edef] dark:border-[#2a3942]/40">
          <p className="text-[14px] font-semibold text-[#111b21] dark:text-[#e9edef] mb-2">Resumo do pedido</p>
          <div className="flex justify-between text-[14px] mb-1">
            <span className="text-[#667781] dark:text-[#8696a0]">Flow Sneaker X1 (40)</span>
            <span className="text-[#111b21] dark:text-[#e9edef]">R$ 349,90</span>
          </div>
          <div className="flex justify-between text-[14px] mb-1">
            <span className="text-[#667781] dark:text-[#8696a0]">Frete</span>
            <span className="text-[#00a884] dark:text-[#53bdeb]">Grátis</span>
          </div>
          <div className="flex justify-between text-[16px] font-bold pt-2 mt-2 border-t border-[#e9edef] dark:border-[#2a3942]/40">
            <span className="text-[#111b21] dark:text-[#e9edef]">Total</span>
            <span className="text-[#111b21] dark:text-[#e9edef]">R$ 349,90</span>
          </div>
        </div>
      </div>
      <FlowFooter label="Finalizar pedido" onClick={() => goTo("done")} />
    </>
  );

  // Done screen
  const DoneScreen = () => (
    <>
      <FlowHeader title="Pedido" onBack={() => goTo("chat")} />
      <div className="bg-white dark:bg-[#111b21] px-5 py-5 flex-1 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 rounded-full bg-[#00a884]/20 flex items-center justify-center mb-4">
          <CheckCheck size={32} className="text-[#00a884]" />
        </div>
        <h3 className="text-[#111b21] dark:text-[#e9edef] text-[20px] font-bold">Pedido confirmado! 🎉</h3>
        <p className="text-[#667781] dark:text-[#8696a0] text-[14px] mt-3 max-w-[260px] leading-relaxed">
          Seu pedido <span className="font-semibold text-[#111b21] dark:text-[#e9edef]">#FC-2847</span> foi realizado com sucesso.
        </p>
        <div className="mt-5 rounded-xl border border-[#d1d7db] dark:border-[#3b4a54] px-4 py-3 w-full max-w-[240px] text-left">
          <div className="flex justify-between text-[13px] mb-1">
            <span className="text-[#667781] dark:text-[#8696a0]">Produto</span>
            <span className="text-[#111b21] dark:text-[#e9edef] font-medium">Flow Sneaker X1</span>
          </div>
          <div className="flex justify-between text-[13px] mb-1">
            <span className="text-[#667781] dark:text-[#8696a0]">Pagamento</span>
            <span className="text-[#111b21] dark:text-[#e9edef] font-medium">Pix</span>
          </div>
          <div className="flex justify-between text-[13px]">
            <span className="text-[#667781] dark:text-[#8696a0]">Total</span>
            <span className="text-[#00a884] dark:text-[#53bdeb] font-bold">R$ 349,90</span>
          </div>
        </div>
        <p className="text-[#667781] dark:text-[#8696a0] text-[13px] mt-4 max-w-[260px]">
          Você receberá atualizações sobre seu pedido aqui mesmo no WhatsApp.
        </p>
        <button
          onClick={() => goTo("chat")}
          className="mt-5 text-[#00a884] dark:text-[#53bdeb] text-[14px] font-medium hover:underline"
        >
          Voltar ao início
        </button>
      </div>
    </>
  );

  const flowScreens: Record<Exclude<FlowScreen, "chat">, JSX.Element> = {
    categories: <CategoriesScreen />,
    product: <ProductScreen />,
    cart: <CartScreen />,
    address: <AddressScreen />,
    payment: <PaymentScreen />,
    done: <DoneScreen />,
  };

  return (
    <div className="flex justify-center">
      {/* Phone frame */}
      <div className="w-[300px] md:w-[340px] h-[580px] md:h-[680px] rounded-[2.5rem] border-[6px] border-[#d1d5db] dark:border-[#2a2a2e] bg-white dark:bg-black shadow-[0_20px_60px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden relative flex flex-col">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90px] h-[22px] bg-white dark:bg-black rounded-b-2xl z-20" />

        {/* Status bar */}
        <div className="h-[44px] bg-[#008069] dark:bg-[#202c33] flex items-end justify-between px-6 pb-1.5 text-[11px] text-white/80 font-medium z-10 relative">
          <span>9:41</span>
          <div className="flex items-center gap-1.5">
            <svg width="16" height="12" viewBox="0 0 16 12" fill="white" opacity="0.8">
              <rect x="0" y="8" width="3" height="4" rx="0.5" />
              <rect x="4.5" y="5" width="3" height="7" rx="0.5" />
              <rect x="9" y="2" width="3" height="10" rx="0.5" />
              <rect x="13.5" y="0" width="3" height="12" rx="0.5" opacity="0.3" />
            </svg>
            <div className="flex items-center gap-0.5">
              <div className="w-[22px] h-[10px] border border-white/60 rounded-[2px] relative p-[1px]">
                <div className="h-full w-[70%] bg-white/80 rounded-[1px]" />
              </div>
              <div className="w-[1.5px] h-[4px] bg-white/60 rounded-r-sm" />
            </div>
          </div>
        </div>

        {/* Chat + Flow */}
        <div className="flex flex-col relative flex-1 min-h-0">
          {/* WhatsApp header */}
          <div className="bg-[#008069] dark:bg-[#202c33] px-2 py-1.5 flex items-center gap-2">
            <ChevronLeft size={22} className="text-white dark:text-[#00a884] shrink-0" />
            <div className="w-[34px] h-[34px] rounded-full shrink-0 overflow-hidden">
              <img src={brevyaAvatar} alt="Flow Commerce" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white dark:text-[#e9edef] text-[16px] font-normal leading-tight truncate">Flow Commerce</p>
              <p className="text-[13px] text-white/80 dark:text-[#00a884] leading-tight">online</p>
            </div>
            <div className="flex items-center gap-5 text-white/80 dark:text-[#aebac1]">
              <Phone size={19} />
              <MoreVertical size={19} />
            </div>
          </div>

          {/* Chat area */}
          <div
            className="flex-1 px-2.5 py-3 flex flex-col relative overflow-y-auto min-h-0 bg-[#efeae2] dark:bg-transparent"
            style={{
              backgroundImage: `url(${isDark ? waChatBg : waChatBgLight})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex-1" />

            {/* Encryption notice */}
            <div className="flex justify-center mb-3">
              <div className="bg-[#fff3c4]/90 dark:bg-[#182229]/90 rounded-[7px] px-3 py-1.5 flex items-center gap-1.5 backdrop-blur-sm">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="shrink-0">
                  <path d="M8 1a4 4 0 00-4 4v2H3a1 1 0 00-1 1v6a1 1 0 001 1h10a1 1 0 001-1V8a1 1 0 00-1-1h-1V5a4 4 0 00-4-4zm2.5 6h-5V5a2.5 2.5 0 015 0v2z" fill="#8696a0" opacity="0.6" />
                </svg>
                <span className="text-[11px] text-[#54656f] dark:text-[#8696a0] leading-tight text-center">
                  As mensagens são protegidas com a criptografia de ponta a ponta.
                </span>
              </div>
            </div>

            <div className="flex justify-center mb-3">
              <span className="bg-[#e2f7cb] dark:bg-[#182229]/90 text-[#54656f] dark:text-[#8696a0] text-[11.5px] px-3 py-[5px] rounded-[7px] font-medium backdrop-blur-sm">
                HOJE
              </span>
            </div>

            {/* Template message */}
            <div className="max-w-[88%] self-start mb-1">
              <div className="bg-white dark:bg-[#202c33] rounded-[7.5px] rounded-tl-0 overflow-hidden shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] relative">
                <div className="absolute -left-2 top-0">
                  <svg width="9" height="14" viewBox="0 0 9 14">
                    <path d="M1 0L9 0C9 0 4 4 1 14L0 14L0 0Z" className="fill-white dark:fill-[#202c33]" />
                  </svg>
                </div>
                <div className="bg-[#f0f2f5] dark:bg-[#111b21] p-4 flex items-center justify-center">
                  <span className="text-4xl">🛒</span>
                </div>
                <div className="px-2.5 py-2">
                  <p className="text-[#111b21] dark:text-[#e9edef] text-[14.2px] font-medium leading-[19px]">
                    Flow Commerce • Loja
                  </p>
                  <p className="text-[14.2px] text-[#111b21] dark:text-[#e9edef] leading-[19px] mt-1">
                    Olá! 👋 Bem-vindo à nossa loja.
                  </p>
                  <p className="text-[13px] text-[#667781] dark:text-[#8696a0] leading-[17px] mt-1">
                    Navegue, escolha e compre sem sair do WhatsApp.
                  </p>
                  <div className="flex items-center justify-end gap-1 mt-0.5 -mb-0.5">
                    <span className="text-[11px] text-[#667781] dark:text-[#ffffff99]">9:41</span>
                    <CheckCheck size={16} className="text-[#53bdeb]" />
                  </div>
                </div>
                <div className="border-t border-[#e9edef] dark:border-[#8696a0]/20">
                  <button
                    onClick={() => goTo("categories")}
                    className="w-full py-[8px] flex items-center justify-center gap-1.5 text-[#00a884] dark:text-[#53bdeb] text-[14px] font-normal hover:bg-[#00000008] dark:hover:bg-[#ffffff08] transition-colors active:bg-[#00000010] dark:active:bg-[#ffffff10]"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 2h10a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1z" className="stroke-[#00a884] dark:stroke-[#53bdeb]" strokeWidth="1.2" />
                      <path d="M5 6h6M5 8.5h6M5 11h3" className="stroke-[#00a884] dark:stroke-[#53bdeb]" strokeWidth="1" strokeLinecap="round" />
                    </svg>
                    Abrir loja
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom input bar */}
          <div className="bg-[#f0f2f5] dark:bg-[#0b141a] px-[6px] py-[5px] pb-[20px] relative shrink-0">
            <div className="flex items-end gap-1">
              <div className="w-[36px] h-[36px] flex items-center justify-center shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="stroke-[#54656f] dark:stroke-[#8696a0]" strokeWidth="2" strokeLinecap="round">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </div>
              <div className="flex-1 min-w-0 bg-white dark:bg-[#2a3942] rounded-[21px] px-2.5 py-[6px] flex items-center gap-1.5 min-h-[36px]">
                <Smile size={20} className="text-[#54656f] dark:text-[#8696a0] shrink-0" />
                <span className="text-[14px] text-[#667781] dark:text-[#8696a0]">Mensagem</span>
              </div>
              <div className="w-[36px] h-[36px] flex items-center justify-center shrink-0">
                <Mic size={22} className="text-[#54656f] dark:text-[#8696a0]" />
              </div>
            </div>
          </div>

          {/* Flow overlay */}
          <AnimatePresence>
            {screen !== "chat" && (
              <motion.div
                key="flow-overlay"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="absolute bottom-0 left-0 right-0 z-30 flex flex-col rounded-t-2xl overflow-hidden shadow-[0_-4px_20px_rgba(0,0,0,0.4)]"
                style={{ top: "60px" }}
              >
                {/* Drag handle */}
                <div className="bg-[#f0f2f5] dark:bg-[#111b21] pt-2 pb-1 flex justify-center">
                  <div className="w-9 h-[4px] rounded-full bg-[#667781]/40 dark:bg-[#8696a0]/40" />
                </div>
                {flowScreens[screen]}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default FlowCommerceDemo;
