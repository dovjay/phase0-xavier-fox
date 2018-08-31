# Pseudocode Challenge

## 1. Newton Second Law
* Algoritma
```
buat variabel 'F' dengan nilai 0
buat variabel 'mass' dan isi dengan nilai berapapun
buat variabel 'acceleration' dan isi dengan nilai berapapun
buat variabel 'people' dan isi dengan nilai berapapun
hitung 'mass' dikali 'acceleration' dikali 'people'
taruh hasil kalkulasi di variabel 'F' 
```
* Pseudocode
```
STORE 'F' with no value
STORE 'mass' with any value
STORE 'acceleration' with any value
STORE 'people' with any value
CALCULATE 'mass' times 'acceleration' times 'people'
SET 'F' value with calculation result
DISPLAY 'F'
```

## 2. Tahun Kabisat
* Algoritma
```
buat variabel 'year' dan isi dengan nilai berapapun
buat kondisional jika 'year' mod 4 sama dengan 0 DAN 'year' mod 100 tidak sama dengan 0
  maka output "Tahun Kabisat"
dan jika 'year' mod 4 sama dengan 0 DAN 'year' mod 100 sama dengan 0 DAN 'year' mod 400 sama dengan 0
  maka output "Tahun Kabisat"
dan jika kondisi diatas tidak ada yang terpenuhi
  maka output "Bukan Tahun Kabisat"
```
* Pseudocode
```
STORE 'year' with any value
IF 'year' mod 4 equal to 0 AND 'year' mod 100 not equal to 0
  DO "Tahun Kabisat"
ELSE IF 'year' mod 4 equal to 0 AND 'year' mod 100 equal to 0 AND 'year' mod 400 equal to 0
  DO "Tahun Kabisat"
ELSE
  DO "Bukan Tahun Kabisat"
```

## 3. Laundry Day
* Algoritma
```
buat variabel 'clothes' dan isi dengan nilai berapapun
buat variabel 'index' dan isi dengan 0
buat loop while dengan kondisi 'index' kurang dari 'clothes'
  tambah 'index' dengan 1
setelah 'index' sama dengan 'clothes' panggil fungsi jalankanMesinCuci()
```
* Pseudocode
```
STORE 'clothes' with any value
STORE 'index' with 0
WHILE 'index' < 'clothes'
  ADD 'index' by 1
DO jalankanMesinCuci
```

## 4. Periksa Kuku
* Algoritma
```
buat array bernama 'murid' dan isi dengan nilai boolean
buat variabel 'index' dengan nilai 0
buat loop dengan kondisi 'index' kurang dari panjang array 'murid'
  buat kondisional jika array 'murid' dengan ['index'] sama dengan TRUE
    maka output "Baguuus"
  jika kondisi diatas tidak terpenuhi
    maka output "Kamu berdiri dipojok!"
```
* Pseudocode
```
STORE array of boolean 'murid' with any value
STORE 'index' with 0
WHILE 'index' < 'murid'.length
  IF 'murid'['index'] equal to TRUE
    DO "Baguuus"
  ELSE
    DO "Kamu berdiri dipojok!"
```
