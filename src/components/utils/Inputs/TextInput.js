// Material components
import { TextField } from "@mui/material";

export default function TextInput(props) {
    //props destructuring 
    const { label, name, textValue, setTextValue, multiline, rows, type } = props;

    const handleTextInputChange = (e) => setTextValue(e.target.value);

    return (
        <TextField
            multiline={multiline ? true : false}
            rows={rows ? rows : 1}
            varient="contained"
            type={type}
            value={textValue}
            name={name}
            label={label}
            error={textValue === "" ? true : false}
            helperText={textValue === "" ? `${label} is required` : null}
            color="info"
            fullWidth
            onChange={handleTextInputChange}
        />
    );
}