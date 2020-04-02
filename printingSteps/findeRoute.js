

funktion findeRoute(gewicht: int): int
  int günstigsteRouteIndex := 0
  double günstigstePreis := 0

  von reihe := 0, solange reihe<anzahlReihen, reihe++ 
    von spalte := 0, solange spalte < anzahlSpalten, spalte++){
      double totalPreis := 0
      wenn Routen[spalte+1] nicht leer
        int gewicht := holeStreckeGewicht(Routen[spalte, spalte+1])
        double preis: = holeStreckePreis(Routen[spalte, spalte+1])
        double streckePreis := gewicht * preis; 
        totalPreis := totalPreis + streckePreis
    end von spalte
    
    wenn günstigstePreis nicht 0 und günstigstePreis > totalPreis
      günstigstePreis := totalPreis
      günstigsteRouteIndex := reihe

  ende von reihe
  
  rückgabe günstigsteRouteIndex

ende von funktion