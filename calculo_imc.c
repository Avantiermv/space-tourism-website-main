#include <stdio.h>

int main() {
    printf("CALCULO DO IMC!\n\n");

    // Declaração das variáveis.
    float massa, altura, imc;
    float massaminima, massamaxima, pesoperder = 0, pesoganhar = 0;
    float imcminimo = 18.5, imcmaximo = 25;

    printf("Digite sua massa (em Kg) e altura (em metros): ");
    scanf("%f %f", &massa, &altura);

    // Cálculo do imc mano
    imc = massa / (altura * altura);

    // Cálculo da massa mínima e máxima
    massaminima = imcminimo * (altura * altura);
    massamaxima = imcmaximo * (altura * altura);

    // Verificação do IMC (ABAIXO DO PESO DA PESSOA)
    if (imc < 17) {
        printf("Atenção! Você está muito abaixo do peso!\n");
    } else if (imc >= 17 && imc < 18.5) {
        pesoganhar = massaminima - massa;
        printf("Cuidado! Você está abaixo do peso! IMC: %.2f.\n", imc);
        printf("Aconselho a ganhar %.2f Kg para ficar na faixa ideal.\n", pesoganhar);
    }

    // Verificação do IMC (ACIMA DO PESO DA PESSOA)
    else if (imc > 25) {
        pesoperder = massa - massamaxima;
        printf("IMC: %.2f.\n", imc);
        printf("Cuidado! Você está acima do peso. ");

        if (imc >= 25 && imc < 30) {
            printf("Sobrepeso!\n");
        } else if (imc >= 30 && imc < 35) {
            printf("Obesidade!\n");
        } else if (imc >= 35 && imc < 40) {
            printf("Obesidade severa!\n");
        } else {
            printf("Obesidade mórbida!\n");
        }
        printf("Aconselho a perder %.2f Kg para ficar na faixa ideal.\n", pesoperder);
    } 

    // Peso ideal
    else {
        printf("Parabéns! Você está no seu peso ideal. IMC: %.2f.\n", imc);
    }

    return 0;
    /*
    E é isso pessual
    */
}
