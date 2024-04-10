import { AllKalenders } from "@/models/allKalenders"

const getEmptyKalender = (): AllKalenders => {
  return {
    id: '',
    link: '',
    naam: '',
    foto: null
  }
}

export default getEmptyKalender