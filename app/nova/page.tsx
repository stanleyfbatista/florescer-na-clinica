import type { Metadata } from "next";
import { NovaSalesPage } from "./NovaSalesPage";
import "./nova.css";

export const metadata: Metadata = {
  title: "Florescer na Clínica | Método Jardim",
  description: "Estruture sua clínica como um negócio sustentável sem abrir mão da ética e da vocação.",
};

export default function NovaPage() {
  return <NovaSalesPage />;
}

