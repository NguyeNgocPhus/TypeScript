import { MatchData } from "./MatchData";
import { MatchReader } from "./MatchRender";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleLogTarget } from "./reportTagets/ConsolelogTargets";
export interface Analyzer{
    run(matches:MatchData[]) :string;
}
export interface OutPutTarget{
    print(report:string):void;
}


export class Summary {

    static winsAnalysisWithHtmlReport(team: string): Summary {
        return new Summary(new WinsAnalysis(team), new ConsoleLogTarget());
    }
    constructor(public analyzer:Analyzer,public outPutTarget:OutPutTarget){}

    buildAndPrintReport(matcher : MatchData[]){
        const output = this.analyzer.run(matcher);
        this.outPutTarget.print(output);
    }
}