export const AddPetSelects: IPetSelect[] = [
	{
        selectName: 'type',
        valueName:'Вид',
        selectValues: [
            {
                text: 'Собака',
                petValue: 'Собака'
            },
            {
                text: 'Кіт',
                petValue: 'Кіт'
            }
        ]
	},
	{
        selectName: 'size',
        valueName:'Розмір',
        selectValues: [
            {
                petValue: 'Малий',
                text: 'Малий'
            },
			{
                petValue: 'Середній',
                text: 'Середній'
            }
			,
			{
                petValue: 'Великий',
                text: 'Великий'
            }
        ]
	},
	{
        selectName: 'sex',
        valueName:'Стать',
        selectValues: [
            {
                petValue: 'Дівчинка',
                text: 'Дівчинка'
            },
			{
                petValue: 'Хлопчик',
                text: 'Хлопчик'
            }
        ]
	}
]