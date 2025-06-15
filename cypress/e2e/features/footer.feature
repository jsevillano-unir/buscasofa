Feature: Footer

    Scenario: El footer contiene una lista específica de nombres
        Given que visito la página principal
        Then el footer debe mostrar la lista de nombres:
            | Nombre      |
            | Francisco Javier Sevillano Izquierdo |
            | Enrique Fernandez Zapata |
            | Alexia Lasheras Cortina |
            | Isabel Fernandez Marin |