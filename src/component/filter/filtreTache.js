import { ETATS } from "../../data/status";
import { TacheContext } from "../../services/tachesManager";
import { useContext } from "react";

export const EtatTache = (props) => {
    const { etat } = props;
    switch (etat) {
        case ETATS.NOUVEAU:
            return <p className={"etat nouveau"}>Nouveau</p>
        case ETATS.EN_COURS:
            return <p className={"etat enCours"}>En cours</p>
        case ETATS.REUSSI:
            return <p className={"etat reussi"}>Réussi</p>
        case ETATS.EN_ATTENTE:
            return <p className={"etat enAttente"}>En attente</p>
        case ETATS.ABANDONNE:
            return <p className={"etat abandonne"}>Abandonné</p>
        default:
            return <p className={"tous"}>Tous</p>
    }
}

export const ViewFiltre = (props) => {
    const { taches } = useContext( TacheContext );

    return (
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1em'}}>
            <p>Filtres :</p>
            <div onClick={() => filtreTaches('aucunFiltre', taches)}><EtatTache/></div>
            <div onClick={() => filtreTaches(ETATS.NOUVEAU, taches)}><EtatTache etat={ETATS.NOUVEAU}/></div>
            <div onClick={() => filtreTaches(ETATS.EN_COURS, taches)}><EtatTache etat={ETATS.EN_COURS}/></div>
            <div onClick={() => filtreTaches(ETATS.REUSSI, taches)}><EtatTache etat={ETATS.REUSSI}/></div>
            <div onClick={() => filtreTaches(ETATS.EN_ATTENTE, taches)}><EtatTache etat={ETATS.EN_ATTENTE}/></div>
            <div onClick={() => filtreTaches(ETATS.ABANDONNE, taches)}><EtatTache etat={ETATS.ABANDONNE}/></div>
        </div>
    )
}

export function filtreTaches( props ) {
    console.log( props )
}