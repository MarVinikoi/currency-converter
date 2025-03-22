import React, { useEffect, useState, useId } from 'react'



export function CurrencyBox({text, initial_value, options, amountValue, onAmountChange, onCurrencyChange, amountDisabled, currencyDisabled}) {

	const labelId = useId("currency_field")
	

	return (
		<div className='bg-transparent border border-white w-full grid grid-cols-2 p-4 gap-y-5 rounded-2xl'>
			<div className='flex flex-col items-start p-4 gap-y-5'>
				<label htmlFor={labelId} className='text-4xl'>{text}</label>
				<input 
					id={labelId} 
					className='h-10 rounded text-2xl focus:outline-none' 
					type="number" 
					placeholder={"Amount"} 
					autoComplete='false'
					disabled={amountDisabled}
					value = {Number(amountValue).toString()}
					onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}

				/>
			</div>
			<div className='flex flex-col place-items-end p-4 gap-y-5'>
				<h2 className='text-2xl'>Currency Type</h2>
				<select 
					className='w-38' 
					name="Currencies" 
					id="id_Currencies" 
					onChange={(e) => { onCurrencyChange && onCurrencyChange(e.target.value)}}
					disabled={currencyDisabled}	
					value={initial_value}
				>
					{options.map(([key, value]) => {
						if (value && value !== ""){	
							return (
								<option key={key} value={key}>
									{key}
								</option>
							)
						}
					})}
				</select>
			</div>
		</div>
	)
}

