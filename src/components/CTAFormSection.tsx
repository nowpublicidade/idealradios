import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, Mail, Loader2 } from "lucide-react";

const CTAFormSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    telefone: "",
    necessidade: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.nome.trim() || !form.telefone.trim()) {
      toast({ title: "Preencha pelo menos nome e WhatsApp", variant: "destructive" });
      return;
    }

    setLoading(true);
    const { error } = await supabase.from("leads").insert({
      nome: form.nome.trim(),
      empresa: form.empresa.trim() || null,
      telefone: form.telefone.trim(),
      necessidade: form.necessidade || null,
    });
    setLoading(false);

    if (error) {
      toast({ title: "Erro ao enviar. Tente novamente.", variant: "destructive" });
      return;
    }

    toast({ title: "Proposta solicitada com sucesso! Entraremos em contato em breve." });
    setForm({ nome: "", empresa: "", telefone: "", necessidade: "" });
  };

  return (
    <section id="contato" className="relative z-10">
      <div className="bg-gradient-to-br from-ideal-800 via-ideal-700 to-ideal-600 rounded-t-3xl -mt-8 py-20 relative overflow-hidden">
        {/* Orb */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-ideal-400/15 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            {/* Text */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-black text-primary-foreground font-display">
                Solicite sua proposta agora
              </h2>
              <p className="text-ideal-200/80 text-lg">
                Preencha o formulário e nossa equipe retorna em até 2 horas úteis com a melhor solução para sua operação.
              </p>
              <div className="space-y-3 pt-4">
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-ideal-200 hover:text-primary-foreground transition-colors"
                >
                  <MessageCircle size={20} />
                  <span className="font-semibold">(11) 99999-9999</span>
                </a>
                <a
                  href="mailto:contato@idealradios.com.br"
                  className="flex items-center gap-3 text-ideal-200 hover:text-primary-foreground transition-colors"
                >
                  <Mail size={20} />
                  <span className="font-semibold">contato@idealradios.com.br</span>
                </a>
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-primary-foreground/10 backdrop-blur-xl border border-primary-foreground/20 rounded-2xl p-8 space-y-5"
            >
              <div className="space-y-2">
                <Label className="text-primary-foreground font-semibold">Nome *</Label>
                <Input
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  placeholder="Seu nome"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-ideal-200/40"
                  maxLength={100}
                />
              </div>
              <div className="space-y-2">
                <Label className="text-primary-foreground font-semibold">Empresa</Label>
                <Input
                  value={form.empresa}
                  onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                  placeholder="Nome da empresa"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-ideal-200/40"
                  maxLength={100}
                />
              </div>
              <div className="space-y-2">
                <Label className="text-primary-foreground font-semibold">WhatsApp *</Label>
                <Input
                  value={form.telefone}
                  onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                  placeholder="(11) 99999-9999"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-ideal-200/40"
                  maxLength={20}
                />
              </div>
              <div className="space-y-2">
                <Label className="text-primary-foreground font-semibold">Necessidade</Label>
                <Select value={form.necessidade} onValueChange={(v) => setForm({ ...form, necessidade: v })}>
                  <SelectTrigger className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="locacao">Locação de rádios</SelectItem>
                    <SelectItem value="compra">Compra de equipamentos</SelectItem>
                    <SelectItem value="assistencia">Assistência técnica</SelectItem>
                    <SelectItem value="sistemas">Sistemas e infraestrutura</SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-ideal-500 to-ideal-400 hover:from-ideal-400 hover:to-ideal-300 text-primary-foreground font-bold text-base h-12 shadow-xl shadow-ideal-500/30"
              >
                {loading ? <Loader2 className="animate-spin" /> : "Quero uma proposta agora"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAFormSection;
