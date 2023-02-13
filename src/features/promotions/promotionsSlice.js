import {PROMOTIONS} from '../../app/shared/PROMOTIONS'

export const selectFeaturedPromotion = () => {
    return PROMOTIONS.find((Promotion) => Promotion.featured)
}; 