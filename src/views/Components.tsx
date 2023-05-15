import MuiComponentSamples from "@/components/MuiComponentSamples/MuiComponentSamples"
import BlurHeader from "@/components/molecules/BlurHeader"
import SearchBar from "@/components/molecules/SearchBar"

const Components = () => {
  return (
    <>
      <BlurHeader
        title="Components">
        <SearchBar />
      </BlurHeader>
      <MuiComponentSamples />
    </>
  )
}

export default Components