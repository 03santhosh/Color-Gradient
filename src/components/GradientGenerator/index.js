import {Component} from 'react'

import {
  GradientContainer,
  GradientHeading,
  GradientParagraph,
  CustomUnorderdList,
  ColorContainer,
  ColorLabel,
  ColorInput,
  ColorMainContainer,
  GradientButton,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    gradientDirection: gradientDirectionsList[0].value,
    colorOne: '#8ae323',
    colorTwo: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b `,
  }

  onChangeColorOne = event => {
    this.setState({colorOne: event.target.value})
  }

  onChangeColorTwo = event => {
    this.setState({colorTwo: event.target.value})
  }

  triggerDirectionBtn = direction => {
    this.setState({gradientDirection: direction})
  }

  onClickGenerateBtn = () => {
    const {colorOne, colorTwo, gradientDirection} = this.state
    this.setState({
      gradientValue: `to ${gradientDirection}, ${colorOne}, ${colorTwo}`,
    })
  }

  render() {
    const {gradientDirection, colorOne, colorTwo, gradientValue} = this.state
    return (
      <GradientContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <GradientHeading>Generate a CSS Color Gradient</GradientHeading>
        <GradientParagraph as="p">Choose Direction</GradientParagraph>
        <CustomUnorderdList>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              key={each.directionId}
              gradientDirectionDetails={each}
              triggerDirectionBtn={this.triggerDirectionBtn}
              isActive={gradientDirection === each.value}
            />
          ))}
        </CustomUnorderdList>
        <GradientParagraph as="p">Pick the Colors</GradientParagraph>
        <ColorMainContainer>
          <ColorContainer>
            <ColorLabel>{colorOne}</ColorLabel>
            <ColorInput
              type="color"
              value={colorOne}
              onChange={this.onChangeColorOne}
            />
          </ColorContainer>
          <ColorContainer>
            <ColorLabel>{colorTwo}</ColorLabel>
            <ColorInput
              type="color"
              value={colorTwo}
              onChange={this.onChangeColorTwo}
            />
          </ColorContainer>
        </ColorMainContainer>
        <GradientButton type="button" onClick={this.onClickGenerateBtn}>
          Generate
        </GradientButton>
      </GradientContainer>
    )
  }
}

export default GradientGenerator
