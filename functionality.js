function qAndA () {
    var a = JSON.parse("{\"response_code\":0,\"results\":[{\"category\":\"Entertainment: Books\",\"type\":\"multiple\",\"difficulty\":\"easy\",\"question\":\"Who wrote Harry Potter?\",\"correct_answer\":\"J.K. Rowling\",\"incorrect_answers\":[\"J.R.R. Tolkien\",\"Terry Pratchett\",\"Daniel Radcliffe\"]},{\"category\":\"Entertainment: Books\",\"type\":\"multiple\",\"difficulty\":\"easy\",\"question\":\"George Orwell wrote this book, which is often considered a statement on government oversight.\",\"correct_answer\":\"1984\",\"incorrect_answers\":[\"The Old Man and the Sea\",\"Catcher and the Rye\",\"To Kill a Mockingbird\"]},{\"category\":\"Entertainment: Books\",\"type\":\"multiple\",\"difficulty\":\"easy\",\"question\":\"Which famous book is sub-titled &#039;The Modern Prometheus&#039;?\",\"correct_answer\":\"Frankenstein\",\"incorrect_answers\":[\"Dracula\",\"The Strange Case of Dr. Jekyll and Mr. Hyde \",\"The Legend of Sleepy Hollow\"]},{\"category\":\"Entertainment: Books\",\"type\":\"multiple\",\"difficulty\":\"easy\",\"question\":\"What was the name of Captain Nemo's submarine in 20,000 Leagues Under the Sea&quot;?\",\"correct_answer\":\"The Nautilus\",\"incorrect_answers\":[\"The Neptune\",\"The Poseidon  \",\"The Atlantis\"]},{\"category\":\"Entertainment: Books\",\"type\":\"multiple\",\"difficulty\":\"easy\",\"question\":\"Which of the following is the world&#039;s best-selling book?\",\"correct_answer\":\"The Lord of the Rings\",\"incorrect_answers\":[\"The Little Prince\",\"Harry Potter and the Philosopher&#039;s Stone\",\"The Da Vinci Code\"]},{\"category\":\"Entertainment: Books\",\"type\":\"multiple\",\"difficulty\":\"easy\",\"question\":\"Who wrote the novel 'Fear And Loathing In Las Vegas'?\",\"correct_answer\":\"Hunter S. Thompson\",\"incorrect_answers\":[\"F. Scott Fitzgerald\",\"Henry Miller\",\"William S. Burroughs\"]},{\"category\":\"Entertainment: Books\",\"type\":\"multiple\",\"difficulty\":\"easy\",\"question\":\"&quot;Green Eggs And Ham&quot; is a book by which author?\",\"correct_answer\":\"Dr. Seuss\",\"incorrect_answers\":[\"Beatrix Potter\",\"Roald Dahl\",\"A.A. Milne\"]},{\"category\":\"Entertainment: Books\",\"type\":\"multiple\",\"difficulty\":\"easy\",\"question\":\"Which famous spy novelist wrote the childrens'story Chitty-Chitty-Bang-Bang?\",\"correct_answer\":\"Ian Fleming\",\"incorrect_answers\":[\"Joseph Conrad\",\"John Buchan\",\"Graham Greene\"]},{\"category\":\"Entertainment: Books\",\"type\":\"multiple\",\"difficulty\":\"easy\",\"question\":\"How many Harry Potter books are there?\",\"correct_answer\":\"7\",\"incorrect_answers\":[\"8\",\"5\",\"6\"]},{\"category\":\"Entertainment: Books\",\"type\":\"multiple\",\"difficulty\":\"easy\",\"question\":\"Under what pseudonym did Stephen King publish five novels between 1977 and 1984?\",\"correct_answer\":\"Richard Bachman\",\"incorrect_answers\":[\"J. D. Robb\",\"Mark Twain\",\"Lewis Carroll\"]},{\"category\":\"Entertainment: Books\",\"type\":\"multiple\",\"difficulty\":\"easy\",\"question\":\"What is Harry Potter's dad's name?\",\"correct_answer\":\"James Potter\",\"incorrect_answers\":[\"Joey Potter\",\"Frank Potter\",\"Hairy Potter Sr.\"]},{\"category\":\"Entertainment: Books\",\"type\":\"multiple\",\"difficulty\":\"easy\",\"question\":\"Who wrote the young adult novel The Fault in Our Stars?\",\"correct_answer\":\"John Green\",\"incorrect_answers\":[\"Stephenie Meyer\",\"Suzanne Collins\",\"Stephen Chbosky\"]},{\"category\":\"Entertainment: Books\",\"type\":\"multiple\",\"difficulty\":\"easy\",\"question\":\"Who was the author of the 1954 novel, Lord of the Flies?\",\"correct_answer\":\"William Golding\",\"incorrect_answers\":[\"Stephen King\",\"F. Scott Fitzgerald\",\"Hunter Fox\"]},{\"category\":\"Entertainment: Books\",\"type\":\"multiple\",\"difficulty\":\"easy\",\"question\":\"What is the name of the three headed dog in Harry Potter and the Sorcerer's Stone?\",\"correct_answer\":\"Fluffy\",\"incorrect_answers\":[\"Spike\",\"Poofy\",\"Spot\"]},{\"category\":\"Entertainment: Books\",\"type\":\"multiple\",\"difficulty\":\"easy\",\"question\":\"What is the name of the protagonist of J.D. Salinger's novel Catcher in the Rye?\",\"correct_answer\":\"Holden Caulfield\",\"incorrect_answers\":[\"Fletcher Christian\",\"Jay Gatsby\",\"Randall Flagg\"]},{\"category\":\"Entertainment: Books\",\"type\":\"multiple\",\"difficulty\":\"easy\",\"question\":\"What is the title of the first Sherlock Holmes book by Arthur Conan Doyle?\",\"correct_answer\":\"A Study in Scarlet\",\"incorrect_answers\":[\"The Sign of the Four\",\"A Case of Identity\",\"The Doings of Raffles Haw\"]},{\"category\":\"Entertainment: Books\",\"type\":\"multiple\",\"difficulty\":\"easy\",\"question\":\"What is the name of Sherlock Holmes's brother?\",\"correct_answer\":\"Mycroft Holmes\",\"incorrect_answers\":[\"Mederi Holmes\",\"Martin Holmes\",\"Herbie Hancock Holmes\"]},{\"category\":\"Entertainment: Books\",\"type\":\"multiple\",\"difficulty\":\"easy\",\"question\":\"In the name of the fictional SCP Foundation, what does the SCP stand for?\",\"correct_answer\":\"Special Containment Procedures\",\"incorrect_answers\":[\"Secure, Contain, Protect\",\"Supernatural Creature Preservation\",\"Silent Community Protection\"]},{\"category\":\"Entertainment: Books\",\"type\":\"multiple\",\"difficulty\":\"easy\",\"question\":\"What was the first ever entry written for the SCP Foundation collaborative writing project?\",\"correct_answer\":\"SCP-173\",\"incorrect_answers\":[\"SCP-001\",\"SCP-999\",\"SCP-1459\"]},{\"category\":\"Entertainment: Books\",\"type\":\"multiple\",\"difficulty\":\"easy\",\"question\":\"Which is NOT a book in the Harry Potter Series?\",\"correct_answer\":\"The House Elf\",\"incorrect_answers\":[\"The Chamber of Secrets\",\"The Prisoner of Azkaban\",\"The Deathly Hallows\"]}]}")
    var list1 = a["results"];
    var listRet = [];
    for (var i = 0; i < list1.length; i++){
        var map1 = {};
        map1["question"] = list1[i]["question"];
        map1["choices"] = list1[i]["incorrect_answers"];
        map1["choices"].push(list1[i]["correct_answer"]);
        map1["correct"] = list1[i]["correct_answer"];
        listRet.push(map1);
    }
    return listRet
}
//testing for qAndA()
//console.log (qAndA ())

//shuffles individual question list of answers
function shuffleAnswers (list1) {
  list1.sort(function(a, b){return 0.5 - Math.random()});
  return list1

}
//testing for shuffleAnswers()
//console.log(list1[0]["choices"]);
//console.log(shuffleAnswers (list1[0]["choices"]));
//console.log(list1[0]["choices"]);


//shuffels the answers of the whole list of 20 questions
function shuffleAnsInList (list1){
  for (var i = 0; i < list1.length; i++){
    shuffleAnswers (list1[i]["choices"])
    shuffleAnswers (list1[i]["choices"])
  }
}
//testing for shuffleAnsInList()
//var list1 = qAndA()
//console.log(list1);
//shuffleAnsInList(list1)
//console.log(list1);
