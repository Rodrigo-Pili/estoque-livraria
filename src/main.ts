import { logica } from "./cadastro";
import { vista } from "./vista";

export namespace apl {
    export class Apl {
        public static main() {
            let c = new logica.Cadastro();
            let v = new vista.Vista(c);
            c.associarVista(v);
        }
    }
}

apl.Apl.main();