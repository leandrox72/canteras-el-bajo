import { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async";
import { Navbar, PagesTitle, Loading, Footer, Cta, BudgetMultiStep } from "../components";

const BudgetPage = () => {

  const [loading, setLoading] = useState(true);
  const [startVisible, setStartVisible] = useState(true);
  const active = 4;
  const pageTitle = "Presupuesto";
  
  useEffect(() => {   
    window.scrollTo({ top: 0, left: 0 });
    setTimeout(() => {
      setLoading(false)
      setStartVisible(false)
    }, 500)
  },[])

  return (
    <>
      <Helmet>
        <title>Solicitar Presupuesto | Canteras El Bajo</title>
        <meta
          name='description'
          content="Solicitar Presupuesto"
        />
      </Helmet>

      <Navbar passActive={active} setLoading={setLoading} page={pageTitle} /> 
      <PagesTitle title='Presupuesto' />
      <BudgetMultiStep />
      <Footer />
      <Cta />

      <Loading loading={loading} startVisible={startVisible} />
    </>
  )
}

export default BudgetPage