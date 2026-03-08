import DiagnosisPage from "../../components/DiagnosisPage";
import { pages } from "../../content";
import { buildMetadata } from "../../pageUtils";

const page = pages["addiction-group"];

export const metadata = buildMetadata(page);

export default function AddictionGroupPage() {
  return <DiagnosisPage page={page} />;
}
