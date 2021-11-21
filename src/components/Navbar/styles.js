import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    root: {
        flexGrow: 1,
    },
    secondary: {
        main: '#f5f5f5',
      },
}));