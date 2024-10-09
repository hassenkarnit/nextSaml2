// src/types/next.d.ts
import { SamlUserProfile } from "@/lib/passport";

declare module "next" {
  interface NextApiRequest {
    login(user: SamlUserProfile, callback: (err?: any) => void): void;
    user?: SamlUserProfile;
  }
}
