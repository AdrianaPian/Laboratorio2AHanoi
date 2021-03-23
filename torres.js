var Solução = "";

function iniciar_torre_de_hanoi() {
    var n_disco = document.getElementById("num_disco").value;
    resolução = "Solução: <br/>";

    resolver_torre_de_hanoi(n_disco, "ORIGEM", "DESTINO", "AUXILIAR");
    document.getElementById("solucionar").innerHTML = Solução;
}

function resolver_torre_de_hanoi(discos, pino1, pino3, pino2) {
    if (discos == 1) {

        Solução += "Mova o disco 1 de " + pino1 + " >>>>> " + pino3 + ".<br/>";

    } else {

        resolver_torre_de_hanoi(discos - 1, pino1, pino2, pino3);


        Solução += "Mova o disco " + discos + " de " + pino1 + " >>>>> " + pino3 + ".<br/>";


        resolver_torre_de_hanoi(discos - 1, pino2, pino3, pino1);
    }
}