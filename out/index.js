"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = __importStar(require("readline"));
var bhaskara_1 = __importDefault(require("./bhaskara"));
var soma_1 = __importDefault(require("./soma"));
var multiplicacao_1 = __importDefault(require("./multiplicacao"));
var subtracao_1 = __importDefault(require("./subtracao"));
var divisao_1 = __importDefault(require("./divisao"));
var potencia_1 = __importDefault(require("./potencia"));
var radiciador_1 = __importDefault(require("./radiciador"));
var iniciar = function () {
    var leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    console.log("=== CALCULADORA ===");
    console.log("[1] Soma");
    console.log("[2] Subtração");
    console.log("[3] Multiplicação");
    console.log("[4] Divisão");
    console.log("[5] Potenciação");
    console.log("[6] Radiciação");
    console.log("[7] Bhaskara");
    leitor.question("Escolha a operação (1-7): ", function (opcaoStr) {
        var opcao = parseInt(opcaoStr);
        if (opcao === 7) {
            leitor.question("Digite o valor de a: ", function (aStr) {
                leitor.question("Digite o valor de b: ", function (bStr) {
                    leitor.question("Digite o valor de c: ", function (cStr) {
                        var a = parseFloat(aStr);
                        var b = parseFloat(bStr);
                        var c = parseFloat(cStr);
                        var resultado = (0, bhaskara_1.default)(a, b, c);
                        console.log("Resultado:", resultado);
                        leitor.close();
                    });
                });
            });
        }
        else {
            leitor.question("Digite o primeiro número: ", function (num1Str) {
                leitor.question("Digite o segundo número: ", function (num2Str) {
                    var num1 = parseFloat(num1Str);
                    var num2 = parseFloat(num2Str);
                    var resultado;
                    switch (opcao) {
                        case 1:
                            resultado = new soma_1.default().calcular(num1, num2);
                            break;
                        case 2:
                            resultado = new subtracao_1.default().calcular(num1, num2);
                            break;
                        case 3:
                            resultado = new multiplicacao_1.default().calcular(num1, num2);
                            break;
                        case 4:
                            resultado = new divisao_1.default().calcular(num1, num2);
                            break;
                        case 5:
                            resultado = new potencia_1.default().calcular(num1, num2);
                            break;
                        case 6:
                            resultado = new radiciador_1.default().calcular(num1, num2);
                            break;
                        default:
                            resultado = "Opção inválida!";
                    }
                    console.log("Resultado:", resultado);
                    leitor.close();
                });
            });
        }
    });
};
iniciar();
