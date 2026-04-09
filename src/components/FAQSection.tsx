import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Já tive fornecedor que sumiu depois da venda.",
    a: "A Ideal tem 18 anos no mercado. Nossos contratos têm SLA, telefone direto e técnico com nome. Não somos revenda que some.",
  },
  {
    q: "Não sei se vocês atendem minha região.",
    a: "Atendemos todo o Brasil. Temos parceiros técnicos nos principais estados e equipe disponível para deslocamento quando necessário.",
  },
  {
    q: "Meu evento é semana que vem. Tem como?",
    a: "Sim. Temos estoque pronto. Se você entrar em contato hoje, conseguimos avaliar a disponibilidade e proposta em horas.",
  },
  {
    q: "Preciso de aprovação interna antes de contratar.",
    a: "A gente prepara a proposta detalhada com especificações técnicas, valores e SLA — tudo que você precisa para apresentar internamente.",
  },
  {
    q: "Como sabe que a peça é original?",
    a: "Somos distribuidores autorizados. Temos nota fiscal, certificado do fabricante e rastreabilidade de peça.",
  },
];

const FAQSection = () => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-black text-center text-foreground font-display mb-4">
          Antes de ir embora, deixa a gente <span className="text-ideal-500">responder</span>.
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          As dúvidas mais comuns de quem chega até aqui.
        </p>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-ideal-200/50 rounded-xl px-5 data-[state=open]:border-ideal-400/40 data-[state=open]:shadow-lg data-[state=open]:shadow-ideal-500/10 transition-all"
            >
              <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
