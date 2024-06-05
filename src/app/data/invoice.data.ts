export const invoiceData: any = {
    id: 1,
    name: "Componentes de PC",
    client: {
        name: "Jesus",
        lastName: "Sanchez",
        address: {
            country: "SPAIN",
            city: "Seville",
            street: "Flores",
            number: 12
        }
    },
    company: {
        name: "New Age",
        fiscalNumber: 123156465, 
    },
    items: [
        {
            id:1,
            product: "RAM Corsair 2x16GB 3600Mhz",
            price: 599,
            quantity: 1
        },
        {
            id:2,
            product: "CPU AMD Ryzen 5 5600",
            price: 199,
            quantity: 2
        },
        {
            id:3,
            product: "Grafica RTX 3060ti",
            price: 299,
            quantity: 3
        }
    ]
}