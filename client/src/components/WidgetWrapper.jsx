import { Box } from "@mui/material";
import { styled } from "@mui/system";


const WidgetWrapper = styled(Box)(({ theme }) => ({
    padding: "1.5 rem 1.5 rem 0.75 rem  1.5 rem",
    backgroundColor: theme.palette.background.alt,
    borderRadius: "0.5rem",
}));
export default WidgetWrapper;
