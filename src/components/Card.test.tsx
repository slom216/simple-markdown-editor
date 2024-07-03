import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Card from './Card'
import style from './Card.module.scss'

describe('Card Component', () => {
  test('renders without crashing', () => {
    render(<Card />)
    const cardElement = screen.getByTestId('card')
    expect(cardElement).toBeInTheDocument()
  })

  test('renders its children', () => {
    render(
      <Card>
        <p>Test Child</p>
      </Card>
    )
    expect(screen.getByText('Test Child')).toBeInTheDocument()
  })

  test('has the correct class name', () => {
    render(<Card />)
    const cardElement = screen.getByTestId('card')
    expect(cardElement).toHaveClass(style.container)
  })
})

// import { render, screen } from '@testing-library/react'
// import '@testing-library/jest-dom'
// import Card from './Card'

// describe('Card Component', () => {
//   test('renders without crashing', () => {
//     render(<Card />)
//     const cardElement = screen.getByTestId('card')
//     expect(cardElement).toBeInTheDocument()
//   })

//   test('renders children when passed in', () => {
//     const childText = 'Test Child'
//     render(
//       <Card>
//         <div>{childText}</div>
//       </Card>
//     )
//     expect(screen.getByText(childText)).toBeInTheDocument()
//   })
// })
