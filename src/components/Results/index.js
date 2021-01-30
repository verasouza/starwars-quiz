import React, {useState} from 'react';
import {Widget} from '../Widget';
import {Button} from '../Button';
import {useRouter} from 'next/router';

export default function ResultWidget (props){
    const router = useRouter();


    function backToHome(e) {
        e.preventDefault();
        router.push("/");

    }

    return(
			<Widget>
				<Widget.Header>
					Seus resultados
			</Widget.Header>
				<Widget.Content>
					<p>
				Você acertou
          {' '}
          {props.results.filter((x) => x).length}
          {' '}
          perguntas
        </p>
					<ul>
						{props.results.map((result, index) => (
							<li key={`result__${result}`}>
								#
								{index + 1}
								{' '}
              Resultado:
								{result === true
									? 'Acertou'
									: 'Errou'}
							</li>
						))}
					</ul>

					<Button type="submit" onClick={(e) => backToHome(e)}>Jogar novamente</Button>

				</Widget.Content>

			</Widget>

	);
}