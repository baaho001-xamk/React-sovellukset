
import { useEffect, useState} from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Button, Checkbox, InputLabel, FormControlLabel, MenuItem, Select, TextField, Slider, Dialog, DialogTitle, DialogContent, DialogContentText,SimpleDialog } from '@material-ui/core/';
  


function App() {

  const [tiedotOK, setTiedotOK] = useState(false);
  const [nimi, setNimi] = useState(null);
  const [email, setEmail] = useState(null);
  const [ehdot, setEhdot] = useState(null);
  const [valinta, SetValinta] = useState(0);

  const [slidervalinta, SetSliderValinta] = useState();
  const [yhteen, setYhteen] = useState();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (value) => {
    setOpen(false);
  };

  



  useEffect (() => {
    if (valinta && slidervalinta && ehdot ) {
     setYhteen(valinta * slidervalinta +100)
    } else {
      setYhteen(valinta * slidervalinta)
    }

  }, [valinta, slidervalinta, ehdot])

  useEffect (() => {
    if (nimi && email) {
  setTiedotOK(true)
    } else {
      setTiedotOK(false)
    }

  }, [nimi, email, ehdot])



  return (
    <Container maxWidth="xs">

     <Typography variant="h4">Mökin varaus</Typography> <br/>
     <InputLabel id="demo-simple-select-label">Mökki ja sen vuorokausihinta.</InputLabel>
     <Select onChange={ (e) => {
                                                  SetValinta(e.target.value);
                                                  } }
     fullWidth
     >
       <MenuItem value={100}>Iltatähti (100e)</MenuItem>
       <MenuItem value={150}>Aamuaurinko (150e)</MenuItem>
       <MenuItem value={85}>Möksä (85e)</MenuItem>
       <MenuItem value={70}>pikkumökki (70e)</MenuItem>
     </Select>
     <br/> <br/>
     
     <InputLabel id="demo-simple-select-label">Varauksen kesto päivinä</InputLabel>

     <Slider onChange={ (e) => {
                                                  SetSliderValinta(e.target.value);
                                                  } }
        defaultValue={1}
        getAriaValueText={SetSliderValinta}

        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={14}
        
      />
     
    
      <FormControlLabel
        control={<Checkbox onChange={(e) => { setEhdot(e.target.checked) }}/> }
        label="Loppusiivous (100e)"
        
      />
<br/>
<TextField 
     label="Nimi"
     placeholder="Etunimi Sukunimi"
     fullWidth={true}
     variant="outlined"
     className="marginaali"
     onChange={(e) => { setNimi(e.target.value) }}
     
     /> 

     <br/><br/>
     <TextField 
     label="Saapumispäivämäärä"
     placeholder="pp.kk.vvvv"

     fullWidth
     variant="outlined"
     className="marginaali"
     onChange={(e) => { setEmail(e.target.value) }}

     
     /> 

<br/><br/>


<Typography>Kokonaishinta: {yhteen} </Typography>

     
     

     <Button 
     className="marginaali"
     variant="contained" 
     color="primary"
     size="large"
     fullWidth
     disabled={!tiedotOK}
     onClick={handleClickOpen}
     >Varaa mökki</Button>



<Dialog open={open} onClose={handleClose} 
       
      >
        <DialogTitle id="simple-dialog-title">Varauksen yhteenveto</DialogTitle><DialogContent>
        <DialogContentText><Typography>varaajan nimi: {nimi}
                          <br/>
                          Saapumispäivämäärä: {email}

                          <br/>
                          Varauksen lopullinen hinta : {yhteen}
                          </Typography> </DialogContentText> </DialogContent>

     </Dialog>
    </Container>
  );
}

export default App;
