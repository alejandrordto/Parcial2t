/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package edu.eci.arsw.valley.services;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.NoSuchElementException;

@Service
/**
 *
 * @author 2112107
 */
public class WeatherService {
    
    private static final String SITE = "http://api.openweathermap.org/data/2.5/weather?q=";
    private static final String ID = "&appid=41754e17305d1f15a51861d938918408";
    private static final String AGENT = "Mozilla/5.0";
    /**
     * metodo para comunicarse con el appi de clima y sacar los datos.
     * @param city The city to which the climate is going to be consulted.
     * @return The information of the weather.
     */
    public String getInfo(String city) throws IOException {

        URL obj = new URL(SITE+city+ID);
        HttpURLConnection con = (HttpURLConnection) obj.openConnection();
        con.setRequestMethod("GET");
        con.setRequestProperty("User-Agent", AGENT);

        int responseCode = con.getResponseCode();
        System.out.println("GET Response Code :: " + responseCode);

        if (responseCode == HttpURLConnection.HTTP_OK) { 
            BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
            String inputLine;
            StringBuffer response = new StringBuffer();

            while ((inputLine = in.readLine()) != null) {
                response.append(inputLine);
            }
            in.close();

            
            System.out.println(response.toString());
            return response.toString();
        } else {
            System.out.println("GET request not worked");
            throw new NoSuchElementException("City not found");
        }

    }
    
}
