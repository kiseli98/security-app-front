import React from "react";
// @material-ui/core components
import { makeStyles, useTheme } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import DropzoneDialog from "components/MyComp/Dropzone/DropzoneDialog.js";
import Dropzone from "components/MyComp/Dropzone/Dropzone.js";
import Input from "@material-ui/core/Input";
import Grid from "@material-ui/core/Grid";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import inputStyles from "assets/jss/material-kit-react/components/customInputStyle.js";

import FormControl from "@material-ui/core/FormControl";
import DateTimePicker from "components/CustomInput/CustomDate.js";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons

const useStyles = makeStyles(styles);
const useInputStyles = makeStyles(inputStyles);

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder"
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  };
}

export default function WorkSection() {
  const theme = useTheme();
  const classes = useStyles();
  const inputClasses = useInputStyles();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = event => {
    setPersonName(event.target.value);
  };
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Create Your Project</h2>
          <h4 className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            elementum risus vel tortor fringilla, non lacinia turpis commodo.
            Nunc erat nibh, ultrices a diam et, porttitor feugiat tortor. Duis
            at malesuada felis. Aliquam fermentum blandit pulvinar. Nulla
            malesuada urna a felis vehicula volutpat. Aliquam ac tortor vitae
            augue congue efficitur.
          </h4>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText="Project Name"
                  id="name"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={4} sm={4} md={4}>
                <FormControl fullWidth className={inputClasses.formControl}>
                  <InputLabel className={inputClasses.labelRoot} id="category">
                    Category
                  </InputLabel>
                  <Select
                    labelId="catagory"
                    id="category"
                    value={personName}
                    onChange={handleChange}
                    input={
                      <Input
                        classes={{
                          input: inputClasses.input,
                          underline: inputClasses.underline
                        }}
                      />
                    }
                    MenuProps={MenuProps}
                  >
                    {names.map(name => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, personName, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem xs={4} sm={4} md={4}>
                <DateTimePicker
                  className={classes.black}
                  dateFormat="YYYY-MM-DD"
                  timeFormat={false}
                  labelText="Target Date"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Icon className="far fa-calendar-alt"></Icon>
                      </InputAdornment>
                    )
                  }}
                />
              </GridItem>
              <GridItem xs={4} sm={4} md={4}>
                <CustomInput
                  labelText="Target Sum"
                  id="targetSum"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Icon className="fas fa-dollar-sign"></Icon>
                      </InputAdornment>
                    )
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText="Your ID Number"
                  id="id"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <div className={classes.space50} />
              </GridItem>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <DropzoneDialog
                  dialogTitle="Upload preview image (max 1)"
                  filesLimit="1"
                  buttonProps={{
                    buttonText: <div>
                      <Icon className="far fa-image"></Icon>
                      Add Preview Image
                    </div> ,
                    color: "info"
                  }}
                />
              </Grid>
              <CustomInput
                labelText="Project Description"
                id="projectDesc"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea
                }}
                inputProps={{
                  multiline: true,
                  rows: 6
                }}
              />
              <GridItem className={classes.textCenter + " " + classes.black} xs={12} sm={12} md={12}>
                <h2>Upload Project Images (Up to 10)</h2>
                <Dropzone
                  filesLimit="10"
                  className={classes.black} />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <div className={classes.space50} />
              </GridItem>
              <GridItem xs={12} sm={12} md={12} className={classes.textCenter}>
                <Button color="primary">Create Project</Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
