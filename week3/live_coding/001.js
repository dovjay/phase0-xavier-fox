STORE 'x' with any value
STORE array of 'toys' with any value
STORE 'i' with 0
STORE 'buy' with false
STORE 'buyToy' with 0
WHILE 'i' < 'toys'.length
  IF 'x' > 'toys'['i']
    DO 'buy' = true
    DO 'buyToy' = 'toys'['i']
  ADD 'i' by 1
IF 'buy' == true
  DO "saya beli ini"
  DO "ini kembaliannya dek!", ('x' - 'buyToy')
ELSE
  DO "nabung lagi ya dek!"