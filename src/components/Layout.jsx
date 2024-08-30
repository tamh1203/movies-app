import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Link } from "react-router-dom";
import logoMovies from "../logo-movies.png";
import { styled } from "@mui/system";

const darkTheme = createTheme({
	palette:{
		mode: 'dark',
	}
});

// css cho thẻ img
const Img = styled('img')({
	marginLeft: "auto",
	marginRight: "auto",
	display: "block",
	width: 500,
	maxWidth: '100%',
});

// ccs cho thẻ div
const LayoutWrapper = styled('div')(({theme})=>({
	marginTop: 24,
	width: 'auto',
	[theme.breakpoints.up('lg')]:{
		marginLeft : 'auto',
		marginRight: 'auto',
		with : theme.breakpoints.values.lg,
	}
}));

const Layout = ({children})=>{

	return(
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<LayoutWrapper>
				<Link to="/" >
					<Img src={logoMovies} alt="The Movies" />
				</Link>
			</LayoutWrapper>
			{children}
		</ThemeProvider>
	)
}

export default Layout;