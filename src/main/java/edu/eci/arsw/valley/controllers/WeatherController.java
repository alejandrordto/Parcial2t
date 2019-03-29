/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.arsw.valley.controllers;
import edu.eci.arsw.valley.services.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@RequestMapping(value = "/weather")
@CrossOrigin(origins = "*")
/**
 *
 * @author 2112107
 */
public class WeatherController {
    @Autowired
    WeatherService owms;

    /**
     * Clase para el metodo get del APIREST
     * @param city The city to which the climate is going to be consulted.
     * @return The information of the weather.
     */
    @RequestMapping(method = RequestMethod.GET,path = "/{city}")
    public ResponseEntity<?> handlerGetResourceWeather(@PathVariable String city) {
        try {
            return new ResponseEntity<>(owms.getInfo(city), HttpStatus.ACCEPTED);
        } catch (Exception ex) {
            Logger.getLogger(WeatherController.class.getName()).log(Level.SEVERE, null, ex);
            return new ResponseEntity<>("Error, city not found", HttpStatus.NOT_FOUND);
        }
    }
}
