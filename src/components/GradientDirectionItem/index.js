import {
  GradientDirectionList,
  GradientDirectionButton,
} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDirectionDetails, triggerDirectionBtn, isActive} = props
  const {value, displayText} = gradientDirectionDetails

  const onClickDirectionBtn = () => {
    triggerDirectionBtn(value)
  }

  return (
    <>
      <GradientDirectionList>
        <GradientDirectionButton
          type="button"
          isActive={isActive}
          onClick={onClickDirectionBtn}
        >
          {displayText}
        </GradientDirectionButton>
      </GradientDirectionList>
    </>
  )
}
export default GradientDirectionItem
