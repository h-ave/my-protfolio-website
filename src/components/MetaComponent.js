import { Helmet, HelmetProvider } from "react-helmet-async";

 const MetaComponent = ({ title = "Hila Aveksis", description="Freelance Full stack developer פרילנסר ריאקט" }) => {
    return (
       <HelmetProvider>
           <Helmet>
              <title>{title}</title> 
              <meta name="description" content={description} />
           </Helmet>
       </HelmetProvider> 
    )
 }

 export default MetaComponent