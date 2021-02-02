const  getInputValues  =  ( )  =>  {
  const  shapeType  =  parseInt ( document . querySelector ( "#shape" ) . value ,  10 ) ;
  const  r  =  parseInt ( document . querySelector ( "#R" ) . value ,  10 ) ;
  const  g  =  parseInt ( document . querySelector ( "#G" ) . value ,  10 ) ;
  const  b  =  parseInt ( document . querySelector ( "#B" ) . value ,  10 ) ;
  return  { shapeType , r , g , b } ;
} ;

const  getShape  =  ( {  shapeType  } )  =>  {
  niech  kształt ;
  if  ( shapeType  ===  1 )  {
    kształt  =  "miś" ;
     kształt powrotu ;
  }  else  if  ( shapeType  ===  2 )  {
    kształt  =  "żabka" ;
     kształt powrotu ;
  }  else  if  ( shapeType  ===  3 )  {
    kształt  =  "serce" ;
     kształt powrotu ;
  }  else  {
    shape  =  "Podałeś niewi właściwewy kształt" ;
     kształt powrotu ;
  }
} ;

const  assingShape  =  ( shape )  =>  {
  dokument . querySelector ( „.form” ) . innerHTML  + =
    "<p> Zamówiłeś żelka:"  +  kształt  +  "</p>" ;
} ;

const  getRGB  =  ( {  r ,  g ,  b  } )  =>  {
  if  ( ( r ,  g ,  b  >  255  ||  r ,  g ,  b  <  0 ) )  {
    dokument . querySelector ( „.colorPicker” ) . innerHTML  =  "Podaj poprawną wartość" ;
  }  else  {
    dokument . querySelector ( „.colorPicker” ) . styl . backgroundColor  =
      "rgb ("  +  r  +  ","  +  g  +  ","  +  b  +  ")" ;
  }
} ;

const  oblicz  =  ( )  =>  {
  const  getValues  =  getInputValues ( ) ;
  const  shapeValue  =  getShape ( getValues ) ;
  assingShape ( shapeValue ) ;
  getRGB ( getValues ) ;
} ;