export const PetSelects: IPetSelect[] = [
	{
        selectName: 'Вид',
        valueName:'type',
        selectValues: [
			{
                text: 'Усі',
                petValue: ''
            },
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
        selectName: 'Вік',
        valueName:'age',
        selectValues: [
            {
                text: 'Усі',
                petValue: ''
            },
            {
                petValue: 'До року',
                text: 'До року'
            },
			{
                petValue: '1 рік',
                text: '1 рік'
            },
			{
                petValue: '2-3 роки',
                text: '2-3 роки'
            },
			{
                petValue: '3-4 роки',
                text: '3-4 роки',
            },
			{
                petValue: '4-6 років',
                text: '4-6 років'
            }
			,
			{
                petValue: '6-8 років',
                text: '6-8 років'
            },
			{
                petValue: '8-10 років',
                text: '8-10 років'
            }
			,
			{
                petValue: '10+ років',
                text: '10+ років'
            }
        ]
	},
	{
        selectName: 'Розмір',
        valueName:'size',
        selectValues: [
			{
                text: 'Усі',
                petValue: ''
            },
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
        selectName: 'Стать',
        valueName:'sex',
        selectValues: [
            {
                text: 'Усі',
                petValue: ''
            },
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