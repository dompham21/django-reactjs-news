import { SnackbarProvider } from 'notistack5';





export default function NotistackProvider({ children }) {

  return (
    <SnackbarProvider
      dense
      maxSnack={5}
      autoHideDuration={3000}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
    >
      {children}
    </SnackbarProvider>
  );
}
