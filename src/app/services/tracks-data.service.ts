import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TracksDataService {

  public songs = [
    {name:  "guitar-and-ukulele", path: "assets/music/guitar-and-ukulele.mp3", genre:"pop", artist: "FreeStockMusic", album: "Free Music"},
    {name:  "happy-go-lucky", path: "assets/music/happy-go-lucky.mp3", genre:"pop", artist: "FreeStockMusic", album: "Free Music"},
    {name:  "rocking-pop-kids", path: "assets/music/rocking-pop-kids.mp3", genre:"pop", artist: "Free Stock Music", album: "Stock Music"},
    {name:  "your-weather-forecast", path: "assets/music/your-weather-forecast.mp3", genre:"pop", artist: "Free Stock Music", album: "Stock Music"},
    {name:  "guitar-and-ukulele", path: "assets/music/guitar-and-ukulele.mp3", genre:"pop", artist: "FreeStockMusic", album: "Free Music"},
    {name:  "happy-go-lucky", path: "assets/music/happy-go-lucky.mp3", genre:"pop", artist: "FreeStockMusic", album: "Free Music"},
    {name:  "rocking-pop-kids", path: "assets/music/rocking-pop-kids.mp3", genre:"pop", artist: "Free Stock Music", album: "Stock Music"},
    {name:  "your-weather-forecast", path: "assets/music/your-weather-forecast.mp3", genre:"pop", artist: "Free Stock Music", album: "Stock Music"},
    {name:  "guitar-and-ukulele", path: "assets/music/guitar-and-ukulele.mp3", genre:"pop", artist: "FreeStockMusic", album: "Free Music"},
    {name:  "happy-go-lucky", path: "assets/music/happy-go-lucky.mp3", genre:"pop", artist: "FreeStockMusic", album: "Free Music"},
    {name:  "rocking-pop-kids", path: "assets/music/rocking-pop-kids.mp3", genre:"pop", artist: "Free Stock Music", album: "Stock Music"},
    {name:  "your-weather-forecast", path: "assets/music/your-weather-forecast.mp3", genre:"pop", artist: "Free Stock Music", album: "Stock Music"},
    {name:  "guitar-and-ukulele", path: "assets/music/guitar-and-ukulele.mp3", genre:"pop", artist: "FreeStockMusic", album: "Free Music"},
    {name:  "happy-go-lucky", path: "assets/music/happy-go-lucky.mp3", genre:"pop", artist: "FreeStockMusic", album: "Free Music"},
    {name:  "rocking-pop-kids", path: "assets/music/rocking-pop-kids.mp3", genre:"pop", artist: "Free Stock Music", album: "Stock Music"},
    {name:  "your-weather-forecast", path: "assets/music/your-weather-forecast.mp3", genre:"pop", artist: "Free Stock Music", album: "Stock Music"},
    {name:  "guitar-and-ukulele", path: "assets/music/guitar-and-ukulele.mp3", genre:"pop", artist: "FreeStockMusic", album: "Free Music"},
    {name:  "happy-go-lucky", path: "assets/music/happy-go-lucky.mp3", genre:"pop", artist: "FreeStockMusic", album: "Free Music"},
    {name:  "rocking-pop-kids", path: "assets/music/rocking-pop-kids.mp3", genre:"pop", artist: "Free Stock Music", album: "Stock Music"},
    {name:  "your-weather-forecast", path: "assets/music/your-weather-forecast.mp3", genre:"pop", artist: "Free Stock Music", album: "Stock Music"},
    {name:  "guitar-and-ukulele", path: "assets/music/guitar-and-ukulele.mp3", genre:"pop", artist: "FreeStockMusic", album: "Free Music"},
    {name:  "happy-go-lucky", path: "assets/music/happy-go-lucky.mp3", genre:"pop", artist: "FreeStockMusic", album: "Free Music"},
    {name:  "rocking-pop-kids", path: "assets/music/rocking-pop-kids.mp3", genre:"pop", artist: "Free Stock Music", album: "Stock Music"},
    {name:  "your-weather-forecast", path: "assets/music/your-weather-forecast.mp3", genre:"pop", artist: "Free Stock Music", album: "Stock Music"},
    {name:  "guitar-and-ukulele", path: "assets/music/guitar-and-ukulele.mp3", genre:"pop", artist: "FreeStockMusic", album: "Free Music"},
    {name:  "happy-go-lucky", path: "assets/music/happy-go-lucky.mp3", genre:"pop", artist: "FreeStockMusic", album: "Free Music"},
    {name:  "rocking-pop-kids", path: "assets/music/rocking-pop-kids.mp3", genre:"pop", artist: "Free Stock Music", album: "Stock Music"},
    {name:  "your-weather-forecast", path: "assets/music/your-weather-forecast.mp3", genre:"pop", artist: "Free Stock Music", album: "Stock Music"},
    {name:  "guitar-and-ukulele", path: "assets/music/guitar-and-ukulele.mp3", genre:"pop", artist: "FreeStockMusic", album: "Free Music"},
    {name:  "happy-go-lucky", path: "assets/music/happy-go-lucky.mp3", genre:"pop", artist: "FreeStockMusic", album: "Free Music"},
    {name:  "rocking-pop-kids", path: "assets/music/rocking-pop-kids.mp3", genre:"pop", artist: "Free Stock Music", album: "Stock Music"},
    {name:  "your-weather-forecast", path: "assets/music/your-weather-forecast.mp3", genre:"pop", artist: "Free Stock Music", album: "Stock Music"},
    {name:  "guitar-and-ukulele", path: "assets/music/guitar-and-ukulele.mp3", genre:"pop", artist: "FreeStockMusic", album: "Free Music"},
    {name:  "happy-go-lucky", path: "assets/music/happy-go-lucky.mp3", genre:"pop", artist: "FreeStockMusic", album: "Free Music"},
    {name:  "rocking-pop-kids", path: "assets/music/rocking-pop-kids.mp3", genre:"pop", artist: "Free Stock Music", album: "Stock Music"},
    {name:  "your-weather-forecast", path: "assets/music/your-weather-forecast.mp3", genre:"pop", artist: "Free Stock Music", album: "Stock Music"},
    {name:  "guitar-and-ukulele", path: "assets/music/guitar-and-ukulele.mp3", genre:"pop", artist: "FreeStockMusic", album: "Free Music"},
    {name:  "happy-go-lucky", path: "assets/music/happy-go-lucky.mp3", genre:"pop", artist: "FreeStockMusic", album: "Free Music"},
    {name:  "rocking-pop-kids", path: "assets/music/rocking-pop-kids.mp3", genre:"pop", artist: "Free Stock Music", album: "Stock Music"},
    {name:  "your-weather-forecast", path: "assets/music/your-weather-forecast.mp3", genre:"pop", artist: "Free Stock Music", album: "Stock Music"},
    {name:  "guitar-and-ukulele", path: "assets/music/guitar-and-ukulele.mp3", genre:"pop", artist: "FreeStockMusic", album: "Free Music"},
    {name:  "happy-go-lucky", path: "assets/music/happy-go-lucky.mp3", genre:"pop", artist: "FreeStockMusic", album: "Free Music"},
    {name:  "rocking-pop-kids", path: "assets/music/rocking-pop-kids.mp3", genre:"pop", artist: "Free Stock Music", album: "Stock Music"},
    {name:  "your-weather-forecast", path: "assets/music/your-weather-forecast.mp3", genre:"pop", artist: "Free Stock Music", album: "Stock Music"}
  ];

  constructor() { }
}
