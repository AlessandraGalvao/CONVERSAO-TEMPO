import math

segundos = float(input("Qual a hora queres converter?"))

if  segundos%3600 == 0 :
   horas = int(segundos/3600)
   segundos = 0
   minutos=0
elif segundos>=3600:
    horas = int(segundos/3600)
    restoH = (segundos -(horas*3600))/60
    parte = math.modf(restoH)
    minutos=int(parte[1])
    segundos=int(round(parte[0]))
else: #segundos<3600
    horas=0
    minutos =  int(segundos/60)
    segundos = int(segundos - (minutos*60))
 

print("{}:{}:{}".format(horas, minutos, segundos))