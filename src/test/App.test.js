import { render, screen, fireEvent } from '@vitest/jest'
import { describe, test } from 'vitest'

import App from '../App'

describe('App', () => {
	test('calculates the correct total price', async () => {
		await render(<App />)

		const redButton = await screen.getByText(/Red set/i)
		await fireEvent.click(redButton)

		const greenButton = await screen.getByText(/Green set/i)
		await fireEvent.click(greenButton)
		await fireEvent.click(greenButton)

		const orangeButton = await screen.getByText(/Orange set/i)
		await fireEvent.click(orangeButton)
		await fireEvent.click(orangeButton)

		const memberCardCheckbox = await screen.getByLabelText(/Member Card/i)
		await fireEvent.click(memberCardCheckbox)

		const summaryButton = await screen.getByText(/Summary Orders/i)
		await fireEvent.click(summaryButton)

		const totalPrice = await screen.getByText(/Total Price:/i)

		expect(totalPrice.textContent).toContain('240') // Expected total price: 240 THB
	})
})
