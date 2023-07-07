const convertButton = document.querySelector(".bt-converter")
const currencySelect = document.querySelector(".modeda-select")
const currencySelect2 = document.querySelector(".modeda-select1")

const url = 'https://economia.awesomeapi.com.br/last/' // Criando variaveis com o  Site da API para atualizar o valor em tempo real
const coins = 'USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL,CAD-BRL'  // Completo do site, com as moedas que serão utilizadas

function convertValue() {
    const inputValue = document.querySelector(".input-value").value //Valor digitado
    const valorConverter = document.querySelector(".valor-converter");
    const valorConvertido = document.querySelector(".valor-convertido");


    fetch(url + coins)  // Ultilizando as Variaveis do Caminho para ser utilizado a API
        .then(function (response) {
            return response.json();
        })
        .then(function (data){
            const dolarToday = data.USDBRL.ask // Caminho para pegar o valor da moeda atualizado da API
            const euroToday = data.EURBRL.ask //Euro do dia 
            const libraToday = data.GBPBRL.ask
            const bitcoinToday = data.BTCBRL.ask
            const canadaToday = data.CADBRL.ask
            const realToday = 1.0

           console.log(data);

            if (currencySelect2.value == "dolar") {

                // Formatando valor para moeda Dolar
                valorConverter.innerHTML = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD"
                }).format(inputValue)

            }


            if (currencySelect2.value == "euro") {
                // Formatando valor para moeda Dolar
                valorConverter.innerHTML = new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "EUR"
                }).format(inputValue)

            }

            if (currencySelect2.value == "libra") {

                valorConverter.innerHTML = new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "GBP"
                }).format(inputValue)

            }

            if (currencySelect2.value == "bitcoin") {

                valorConverter.innerHTML = new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "BTC"
                }).format(inputValue)

            }

            if (currencySelect2.value == "real") {

                valorConverter.innerHTML = new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                }).format(inputValue)

            }

            if (currencySelect2.value == "canada") {

                valorConverter.innerHTML = new Intl.NumberFormat("en-CA", {
                    style: "currency",
                    currency: "CAD"
                }).format(inputValue)

            }



            if (currencySelect.value == "dolar") {

                // Formatando valor para moeda Dolar
                valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD"
                }).format(inputValue / dolarToday)

            }


            if (currencySelect.value == "euro") {
                // Formatando valor para moeda Dolar
                valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "EUR"
                }).format(inputValue / euroToday)

            }

            if (currencySelect.value == "libra") {

                valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "GBP"
                }).format(inputValue / libraToday)

            }

            if (currencySelect.value == "bitcoin") {

                valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "BTC"
                }).format(inputValue / bitcoinToday)

            }

            if (currencySelect.value == "real") {

                valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                }).format(inputValue / bitcoinToday)

            }

            if (currencySelect.value == "canada") {

                valorConverter.innerHTML = new Intl.NumberFormat("en-CA", {
                    style: "currency",
                    currency: "CAD"
                }).format(inputValue)

            }


            if (currencySelect2.value == "real") {

                if (currencySelect.value == "real") {

                    valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                    }).format(inputValue * 1)
                }
            }

            if (currencySelect2.value == "real") {

                if (currencySelect.value == "canada") {

                    valorConvertido.innerHTML = new Intl.NumberFormat("en-CA", {
                        style: "currency",
                        currency: "CAD"
                    }).format(inputValue * realToday / (canadaToday))
                }
            }


            // Converte de Dolar
            if (currencySelect2.value == "dolar") {

                if (currencySelect.value == "dolar") {

                    valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD"
                    }).format(inputValue * 1)
                }
            }


            if (currencySelect2.value == "dolar") {

                if (currencySelect.value == "real") {

                    valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                    }).format(inputValue * dolarToday / (realToday))
                }
            }

            if (currencySelect2.value == "dolar") {

                if (currencySelect.value == "euro") {

                    valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
                        style: "currency",
                        currency: "EUR"
                    }).format(inputValue * dolarToday / (euroToday))
                }
            }

            if (currencySelect2.value == "dolar") {

                if (currencySelect.value == "libra") {

                    valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "GBP"
                    }).format(inputValue * dolarToday / (libraToday))
                }
            }

            if (currencySelect2.value == "dolar") {

                if (currencySelect.value == "bitcoin") {

                    valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
                        style: "currency",
                        currency: "BTC"
                    }).format(inputValue * dolarToday / (bitcoinToday))
                }
            }

            if (currencySelect2.value == "dolar") {

                if (currencySelect.value == "canada") {

                    valorConvertido.innerHTML = new Intl.NumberFormat("en-CA", {
                        style: "currency",
                        currency: "CAD"
                    }).format(inputValue * dolarToday / (canadaToday))
                }
            }


            // Converte de Euro
            if (currencySelect2.value == "euro") {

                if (currencySelect.value == "euro") {

                    valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
                        style: "currency",
                        currency: "EUR"
                    }).format(inputValue * euroToday / (euroToday))
                }
            }

            if (currencySelect2.value == "euro") {

                if (currencySelect.value == "dolar") {

                    valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD"
                    }).format(inputValue * euroToday / (dolarToday))
                }
            }


            if (currencySelect2.value == "euro") {

                if (currencySelect.value == "real") {

                    valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                    }).format(inputValue * euroToday / (realToday))
                }
            }


            if (currencySelect2.value == "euro") {

                if (currencySelect.value == "libra") {

                    valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "GBP"
                    }).format(inputValue * euroToday / (libraToday))
                }
            }

            if (currencySelect2.value == "euro") {

                if (currencySelect.value == "bitcoin") {

                    valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
                        style: "currency",
                        currency: "BTC"
                    }).format(inputValue * euroToday / (bitcoinToday))
                }
            }

            if (currencySelect2.value == "euro") {

                if (currencySelect.value == "canada") {

                    valorConvertido.innerHTML = new Intl.NumberFormat("en-CA", {
                        style: "currency",
                        currency: "CAD"
                    }).format(inputValue * euroToday / (canadaToday))
                }
            }

            // Converte da Libra
            if (currencySelect2.value == "libra") {

                if (currencySelect.value == "dolar") {

                    valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD"
                    }).format(inputValue * libraToday / (dolarToday))
                }
            }


            if (currencySelect2.value == "libra") {

                if (currencySelect.value == "real") {

                    valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                    }).format(inputValue * libraToday / (realToday))
                }
            }

            if (currencySelect2.value == "libra") {

                if (currencySelect.value == "euro") {

                    valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
                        style: "currency",
                        currency: "EUR"
                    }).format(inputValue * libraToday / (euroToday))
                }
            }

            if (currencySelect2.value == "libra") {

                if (currencySelect.value == "libra") {

                    valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "GBP"
                    }).format(inputValue * 1)
                }
            }

            if (currencySelect2.value == "libra") {

                if (currencySelect.value == "bitcoin") {

                    valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
                        style: "currency",
                        currency: "BTC"
                    }).format(inputValue * libraToday / (bitcoinToday))
                }
            }


            if (currencySelect2.value == "libra") {

                if (currencySelect.value == "canada") {

                    valorConvertido.innerHTML = new Intl.NumberFormat("en-CA", {
                        style: "currency",
                        currency: "CAD"
                    }).format(inputValue * libraToday / (canadaToday))
                }
            }

            // Converte de Bitcoin
            if (currencySelect2.value == "bitcoin") {

                if (currencySelect.value == "dolar") {

                    valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD"
                    }).format(inputValue * bitcoinToday / (dolarToday))
                }
            }


            if (currencySelect2.value == "bitcoin") {

                if (currencySelect.value == "real") {

                    valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                    }).format(inputValue * bitcoinToday / (realToday))
                }
            }

            if (currencySelect2.value == "bitcoin") {

                if (currencySelect.value == "euro") {

                    valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
                        style: "currency",
                        currency: "EUR"
                    }).format(inputValue * bitcoinToday / (euroToday))
                }
            }

            if (currencySelect2.value == "bitcoin") {

                if (currencySelect.value == "libra") {

                    valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "GBP"
                    }).format(inputValue * bitcoinToday / (libraToday))
                }
            }

            if (currencySelect2.value == "bitcoin") {

                if (currencySelect.value == "bitcoin") {

                    valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
                        style: "currency",
                        currency: "BTC"
                    }).format(inputValue * 1)
                }
            }

            if (currencySelect2.value == "bitcoin") {

                if (currencySelect.value == "canada") {

                    valorConvertido.innerHTML = new Intl.NumberFormat("en-CA", {
                        style: "currency",
                        currency: "CAD"
                    }).format(inputValue * bitcoinToday / (canadaToday))
                }
            }
           

             // Converte de Dolar Canadense
             if (currencySelect2.value == "canada") {

                if (currencySelect.value == "canada") {

                    valorConvertido.innerHTML = new Intl.NumberFormat("en-CA", {
                        style: "currency",
                        currency: "CAD"
                    }).format(inputValue * 1)
                }
            }

            if (currencySelect2.value == "canada") {

                if (currencySelect.value == "dolar") {

                    valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD"
                    }).format(inputValue * canadaToday / (dolarToday))
                }
            }


            if (currencySelect2.value == "canada") {

                if (currencySelect.value == "real") {

                    valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                    }).format(inputValue * canadaToday / (realToday))
                }
            }

            if (currencySelect2.value == "canada") {

                if (currencySelect.value == "euro") {

                    valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
                        style: "currency",
                        currency: "EUR"
                    }).format(inputValue * canadaToday / (euroToday))
                }
            }

            if (currencySelect2.value == "canada") {

                if (currencySelect.value == "libra") {

                    valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "GBP"
                    }).format(inputValue * canadaToday / (libraToday))
                }
            }

            if (currencySelect2.value == "canada") {

                if (currencySelect.value == "bitcoin") {

                    valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
                        style: "currency",
                        currency: "BTC"
                    }).format(inputValue * canadaToday / (bitcoinToday))
                }
            }



        })

}

function changeMoeda() {

    const changeName = document.getElementById("dolar");
    const changeImg = document.getElementById("flat");


    if (currencySelect.value == "dolar") {

        changeName.innerHTML = "Dolar Americano"
        changeImg.src = "./src/usa1.png"

    }

    if (currencySelect.value == "euro") {

        changeName.innerHTML = "Euro"
        changeImg.src = "./src/euro.png"

    }
    if (currencySelect.value == "libra") {

        changeName.innerHTML = "Libra"
        changeImg.src = "./src/libra"

    }

    if (currencySelect.value == "bitcoin") {

        changeName.innerHTML = "Bitcoin"
        changeImg.src = "./src/bitcoin.png"

    }

    if (currencySelect.value == "real") {

        changeName.innerHTML = "Real"
        changeImg.src = "./src/brasil1.png"

    }

    if (currencySelect.value == "canada") {

        changeName.innerHTML = "Dolar Canadense"
        changeImg.src = "./src/canada.png"

    }
    convertValue()

}



function changeMoeda2() {

    const changeName = document.getElementById("real");
    const changeImg = document.getElementById("flat2");


    if (currencySelect2.value == "dolar") {

        changeName.innerHTML = "Dolar Americano"
        changeImg.src = "./src/usa1.png"

    }

    if (currencySelect2.value == "euro") {

        changeName.innerHTML = "Euro"
        changeImg.src = "./src/euro.png"

    }
    if (currencySelect2.value == "libra") {

        changeName.innerHTML = "Libra"
        changeImg.src = "./src/libra"

    }

    if (currencySelect2.value == "bitcoin") {

        changeName.innerHTML = "Bitcoin"
        changeImg.src = "./src/bitcoin.png"

    }

    if (currencySelect2.value == "real") {

        changeName.innerHTML = "Real"
        changeImg.src = "./src/brasil1.png"

    }

    if (currencySelect2.value == "canada") {

        changeName.innerHTML = "Dolar Canadense"
        changeImg.src = "./src/canada.png"

    }
    convertValue()

}


currencySelect2.addEventListener("change", changeMoeda2)
currencySelect.addEventListener("change", changeMoeda)
convertButton.addEventListener("click", convertValue)