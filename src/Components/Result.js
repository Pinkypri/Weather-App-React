import React from 'react'
import {Button,Card,Typography,CardContent} from "@material-ui/core";
import styles from "./Result.module.css"

const Result = ({city,temp,description,icon,settemp}) => {

    return (
        <>  
            <Card CardclassName={styles.card}item xs={12} >
            <CardContent>
                <h1 color="textSecondary" className={styles.title}>The Weather is currently Haze</h1>
              
             <Typography  color="textSecondary"component="p" varient="p" >
             {city} Temperature is:{temp}
        </Typography>
        <Typography  color="textSecondary" component="p" varient="p">
      {description}
        </Typography>
        <Typography  color="textSecondary" >
        <img src={icon} />
        </Typography>

            <Button color="default" onClick={()=>{settemp("")}} >Back</Button>
                  
      </CardContent>
            </Card>
        </>
    )
}

export default Result
