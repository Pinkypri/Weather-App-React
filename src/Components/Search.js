
import React from 'react';
import styles from "./Search.module.css";
import {Card,Typography,CardContent,Button, Input } from "@material-ui/core";


const Search = ({ input, setInput,findweather }) => {
  const handleChange = (event) => {
    setInput(event.target.value)

  }
  const refresh=(e)=>{
 e.preventDefault();
 findweather()
  }

  return (
 
            <Card className={styles.card}item xs={12}>
            <CardContent >
                <Typography  color="textSecondary" className={styles.content} >
                Live  weather  
                </Typography>
                <Typography variant="h6" component="h2" color="default">
                    World Weather Report
                </Typography><br/>
                <Typography variant="body2" component="h2" color="textSecondary">
                    Uses Openweathermap API provides live weather report based on the city you provide
                </Typography><br/>
      
                <form><label className={styles.labl}>City Name:  </label>
                
               <Input type="text" placeholder="Enter Your City Name" onChange={handleChange} value={input} />
                 <Button type='submit' color="primary" className={styles.btn} onClick={refresh}>
          <span> Search </span>
        </Button>
      </form>
      </CardContent>
    </Card>
   
  )
};


export default Search

