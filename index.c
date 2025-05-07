#include <stdio.h>
#include <string.h>
int main(){
  char nome[100];
  float salario = 0, Nsal;
  int dep, pct;
  printf("Digite o primeiro nome do funcionário: ");
  scanf("%s", nome);
  while(salario == 0){
    printf("Digite o salário do funcionário: ");
    scanf("%f", &salario);
    if(salario == 0){
      printf("Salário inválido!\n----------------------\n");
    }
  }
  printf("Qual a quantidade de dependetes: ");
  scanf("%d", &dep);
  switch(dep){
    case 0:
    Nsal = salario + (salario*5/100);
    pct = 5;
    break;
    case 1:
    case 2:
    case 3:
    Nsal = salario + (salario*10/100);
    pct = 10;
    break;
    case 4:
    case 5:
    case 6:
    Nsal = salario + (salario*15/100);
    pct = 15;
    break;
    default:
    Nsal = salario + (salario*18/100);
    pct = 18;
    break;
  }
  printf("O novo salário de %s terá um aumento de %d%%: $%2.f!", nome, pct, Nsal);
}
